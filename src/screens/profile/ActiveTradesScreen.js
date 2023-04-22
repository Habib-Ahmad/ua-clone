import { useState } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "../../api/axios";
import urls from "../../api/urls";
import RightArrow from "../../assets/RightArrow";
import CustomModal from "../../components/input/CustomModal";
import FourDigitInput from "../../components/input/FourDigitInput";
import ScreenHeader from "../../components/ScreenHeader";
import { useGlobalContext } from "../../context/context";
import { colors } from "../../utils";
import { getDate } from "../../utils/dateAndTime";

const ActiveTradesScreen = ({ navigation }) => {
  const {
    state: { activeTrades, user },
  } = useGlobalContext();

  const [activeTradeId, setActiveTradeId] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);
  const [otp, setOtp] = useState();
  const [pin, setPin] = useState();

  const isTrader = user.role === "Trader";

  const handlePress = (id, tradeId, amount, fee) => {
    if (isTrader) {
      setModalVisible(true);
      setActiveTradeId(id);
      return;
    }

    const total = amount + fee;

    navigation.navigate("InitiatedTradeScreen", { id, tradeId, total });
  };

  const getLabel = (status) => {
    if (status === "PaymentMade") return colors.green;
    if (status === "Disputed") return colors.red;
    return colors.primary;
  };

  const enterPIN = () => {
    setModalVisible(false);
    setModalVisible2(true);
  };

  const initiateReceive = async () => {
    await axios
      .post(urls.payment.initiateReceive, { tradeSessionId: activeTradeId, pin })
      .then(() => {
        setModalVisible2(false);
        setModalVisible3(true);
      });
  };

  const receive = async () => {
    await axios
      .post(urls.payment.receive, { tradeSessionId: activeTradeId, pin, code: otp })
      .then(() => {
        setModalVisible3(false);
        setModalVisible4(true);
      });
  };

  const close = () => {
    setModalVisible4(false);
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <ScreenHeader heading="Active Trades" />

      {activeTrades.length > 0 ? (
        <View style={styles.trades}>
          {activeTrades.map((trade) => (
            <TouchableOpacity
              key={trade.id}
              style={styles.trade}
              onPress={() => handlePress(trade.id, trade.tradeId, trade.amount, trade.fee)}
            >
              <View>
                <View style={styles.detail}>
                  <Text style={styles.title}>Merchant:</Text>
                  <Text style={styles.text}>
                    {trade.trader.firstName} {trade.trader.lastName}
                  </Text>
                </View>
                <View style={styles.detail}>
                  <Text style={styles.title}>Amount:</Text>
                  <Text style={styles.text}>{trade.amount + trade.fee}</Text>
                </View>
                <View style={styles.detail}>
                  <Text style={styles.title}>Date initiated:</Text>
                  <Text style={styles.text}>{getDate(trade.createdAt)}</Text>
                </View>
                {isTrader && (
                  <View style={styles.detail}>
                    <Text style={styles.title}>Status:</Text>
                    <Text style={[styles.status, { color: getLabel(trade.state.label) }]}>
                      {trade.state.label}
                    </Text>
                  </View>
                )}
              </View>

              <RightArrow />
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <Text style={styles.inactive}>You currently have no active trades</Text>
      )}

      <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <View>
          <Text style={styles.modalText}>
            You are about to initiate a trade with this trader, proceed?
          </Text>
          <Pressable style={styles.button} onPress={enterPIN}>
            <Text style={styles.textStyle}>Send OTP</Text>
          </Pressable>
        </View>
      </CustomModal>

      <CustomModal modalVisible={modalVisible2} setModalVisible={setModalVisible2}>
        <View style={styles.otpWrapper}>
          <Text style={styles.modalHeading}>Enter PIN</Text>
          <FourDigitInput setValue={setPin} secure />
          <Pressable style={styles.button} onPress={initiateReceive}>
            <Text style={styles.textStyle}>Submit</Text>
          </Pressable>
        </View>
      </CustomModal>

      <CustomModal modalVisible={modalVisible3} setModalVisible={setModalVisible3}>
        <View style={styles.otpWrapper}>
          <Text style={styles.modalHeading}>Enter OTP</Text>
          <FourDigitInput setValue={setOtp} />
          <Pressable style={styles.button} onPress={receive}>
            <Text style={styles.textStyle}>Submit</Text>
          </Pressable>
        </View>
      </CustomModal>

      <CustomModal modalVisible={modalVisible4} setModalVisible={setModalVisible4}>
        <View style={styles.otpWrapper}>
          <Text style={styles.modalHeading}>Success</Text>
          <Pressable style={styles.button} onPress={close}>
            <Text style={styles.textStyle}>Ok</Text>
          </Pressable>
        </View>
      </CustomModal>
    </View>
  );
};

export default ActiveTradesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inactive: {
    textAlign: "center",
    color: colors.textLight,
    fontSize: 16,
    marginTop: 50,
  },
  trades: {
    paddingHorizontal: 20,
    borderTopColor: colors.greyLight,
    borderTopWidth: 1,
  },
  trade: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 40,
    paddingLeft: 30,
    borderBottomColor: colors.greyLight,
    borderBottomWidth: 1,
  },
  detail: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginRight: 10,
    fontSize: 15,
  },
  status: {
    color: colors.black,
    fontWeight: "600",
    fontSize: 16,
  },
  otpWrapper: {
    width: "28%",
  },
  modalHeading: {
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 30,
    elevation: 2,
    width: 150,
    alignSelf: "center",
  },
  textStyle: {
    color: colors.white,
    fontWeight: "600",
    textAlign: "center",
  },
});
