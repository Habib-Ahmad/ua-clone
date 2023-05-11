import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Chat from "../../../assets/Chat";
import EnterOtp from "../../../components/EnterOtp";
import EnterPin from "../../../components/EnterPin";
import Button from "../../../components/input/Button";
import CustomModal from "../../../components/input/CustomModal";
import Loader from "../../../components/Loader";
import ScreenHeader from "../../../components/ScreenHeader";
import Trade from "../../../components/Trade";
import { useGlobalContext } from "../../../context/context";
import { colors, formatTime } from "../../../utils";
import { cancelTrade, fetchTrade, initiateReceive, receive, updateWallet } from "./functions";
import { useTimer } from "./hooks";

const FiatSellInitiatedScreen = ({ route, navigation }) => {
  const { id, total, symbol, session, trade, tradeId, status } = route.params;

  const { state, dispatch } = useGlobalContext();

  const [fetchedTrade, setFetchedTrade] = useState();
  const [timeLeft, setTimeLeft] = useState(20 * 60 * 1000);
  const [transferred, setTransferred] = useState(false);
  const [tradeCompleted, setTradeCompleted] = useState(false);
  const [pin, setPin] = useState("");
  const [otp, setOtp] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);

  useEffect(() => {
    if (!trade) {
      fetchTrade(tradeId, setFetchedTrade);
    }
    if (status === "PaymentMade") {
      setTransferred(true);
    }
  }, [status, trade, tradeId]);

  useTimer(setTimeLeft);

  useEffect(() => {
    if (tradeCompleted) {
      updateWallet(dispatch, navigation);
      return;
    }

    const completedEvent = state.realTimeData.findIndex(
      (item) =>
        item.event.label === "TradeCompleted" && (item.data.sessionId === session?.sessionId || id)
    );

    if (completedEvent > -1) {
      setTradeCompleted(true);
    }
  }, [dispatch, id, navigation, session?.sessionId, state.realTimeData, tradeCompleted]);

  useEffect(() => {
    if (pin.length === 4 && !transferred) {
      initiateReceive(session, id, setTransferred, pin, setModalVisible2, setModalVisible3);
    }
  }, [id, pin, session, transferred]);

  useEffect(() => {
    if (otp.length === 4) {
      receive(session, id, pin, otp, setModalVisible3, navigation, dispatch);
    }
  }, [dispatch, id, navigation, otp, pin, session]);

  return (
    <View style={styles.container}>
      <Loader loading={state.loading} />

      <ScrollView>
        <ScreenHeader heading="Trade Initiated" />

        <TouchableOpacity
          style={styles.chat}
          activeOpacity={0.6}
          onPress={() => navigation.navigate("ChatScreen", { id: session?.sessionId || id })}
        >
          <Chat />
        </TouchableOpacity>

        {!transferred && (
          <>
            <Text style={styles.pay}>You will receive</Text>

            <Text style={styles.amount}>
              {session?.paymentCurrency.symbol || symbol}
              {String(session?.totla || total).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Text>

            <Text style={styles.pay}>within</Text>
            <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
          </>
        )}

        {trade && <Trade trade={trade} handlePress={() => {}} />}
        {fetchedTrade && <Trade trade={fetchedTrade} handlePress={() => {}} />}

        <View style={styles.btnWrapper}>
          <Button
            title="Cancel"
            backgroundColor={colors.red}
            customStyles={styles.btn}
            onPress={() => cancelTrade(session, id, navigation)}
          />
          <Button
            title="I have received"
            customStyles={styles.btn}
            onPress={() => setModalVisible2(true)}
          />
        </View>

        <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>
              You need to upload the payment receipt to raise a dispute
            </Text>
            <View style={styles.buttonWrapper}>
              <Pressable
                style={[styles.button, styles.buttonNo]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonYes]}
                onPress={() =>
                  navigation.navigate("ChatScreen", {
                    id: session?.sessionId || id,
                    isDispute: true,
                  })
                }
              >
                <Text style={styles.textStyle}>Upload</Text>
              </Pressable>
            </View>
          </View>
        </CustomModal>

        <CustomModal modalVisible={modalVisible2} setModalVisible={setModalVisible2}>
          <View style={styles.modal}>
            <EnterPin setPin={setPin} />
          </View>
        </CustomModal>

        <CustomModal modalVisible={modalVisible3} setModalVisible={setModalVisible3}>
          <View style={styles.modal}>
            <EnterOtp setOtp={setOtp} />
          </View>
        </CustomModal>
      </ScrollView>
    </View>
  );
};

export default FiatSellInitiatedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  chat: {
    position: "absolute",
    top: "6%",
    right: "6%",
    backgroundColor: colors.primaryLight,
    padding: 10,
    borderRadius: 22,
  },
  pay: {
    color: colors.greyDark,
    textAlign: "center",
  },
  amount: {
    fontSize: 32,
    textAlign: "center",
    color: colors.primary,
    fontWeight: "600",
  },
  timer: {
    fontSize: 32,
    textAlign: "center",
    color: colors.primary,
    fontWeight: "600",
    borderBottomColor: colors.greyLight,
    borderBottomWidth: 1,
    paddingBottom: 40,
  },
  btnWrapper: {
    marginVertical: 40,
    paddingHorizontal: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    paddingHorizontal: 20,
    width: "100%",
  },
  modalText: {
    textAlign: "center",
    fontSize: 18,
    color: colors.textLight,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 18,
    elevation: 2,
  },
  buttonYes: {
    backgroundColor: colors.primary,
  },
  buttonNo: {
    backgroundColor: colors.greyDark,
  },
  textStyle: {
    color: colors.white,
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
  },
});
