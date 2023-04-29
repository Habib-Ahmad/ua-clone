import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Chat from "../../../assets/Chat";
import Copy from "../../../assets/Copy";
import Button from "../../../components/input/Button";
import ScreenHeader from "../../../components/ScreenHeader";
import Trade from "../../../components/Trade";
import { useGlobalContext } from "../../../context/context";
import { copyToClipboard } from "../../../functions";
import { colors, formatTime } from "../../../utils";
import { cancelTrade, dispute, fetchTrade, transfer, updateWallet } from "./functions";
import { useTimer } from "./hooks";

const InitiatedTradeScreen = ({ route, navigation }) => {
  const { id, total, symbol, session, trade, tradeId, status } = route.params;

  const { state, dispatch } = useGlobalContext();

  const [fetchedTrade, setFetchedTrade] = useState();
  const [timeLeft, setTimeLeft] = useState(20 * 60 * 1000);
  const [transferred, setTransferred] = useState(false);
  const [tradeCompleted, setTradeCompleted] = useState(false);

  useEffect(() => {
    if (!trade) {
      fetchTrade(tradeId, setFetchedTrade);
    }
  }, [trade, tradeId]);

  useEffect(() => {
    if (status === "PaymentMade") {
      setTransferred(true);
    }
  }, [status]);

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

  return (
    <ScrollView style={styles.container}>
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
          <Text style={styles.pay}>Pay the Trader</Text>

          <Text style={styles.amount}>
            {session?.paymentCurrency.symbol || symbol}
            {String(session?.totla || total).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </Text>

          <Text style={styles.pay}>within</Text>
          <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
        </>
      )}

      {transferred && (
        <View style={styles.waiting}>
          <Text style={styles.waitingText}>Waiting for merchant</Text>
        </View>
      )}

      {trade && <Trade trade={trade} handlePress={() => {}} />}
      {fetchedTrade && <Trade trade={fetchedTrade} handlePress={() => {}} />}

      <View style={styles.noteWrapper}>
        <Text style={styles.note}>Note:</Text>
        <Text style={styles.noteText}>Make sure you transfer to the account details bellow</Text>
      </View>

      <View style={styles.account}>
        <Text style={styles.title}>Account name</Text>
        <Text style={styles.detail}>John Doe</Text>
        <Text style={styles.title}>Account number</Text>
        <Text style={styles.detail}>
          0104674762{" "}
          <TouchableOpacity onPress={() => copyToClipboard(1234567890)}>
            <Copy />
          </TouchableOpacity>
        </Text>
        <Text style={styles.title}>Bank</Text>
        <Text style={styles.detail}>Sterling Bank</Text>
      </View>

      <View style={styles.btnWrapper}>
        {transferred ? (
          <View style={styles.disputeWrapper}>
            <Button title="Dispute" backgroundColor={colors.red} onPress={dispute} />
          </View>
        ) : (
          <>
            <Button
              title="Cancel"
              backgroundColor={colors.red}
              customStyles={styles.btn}
              onPress={() => cancelTrade(session, id, navigation)}
            />
            <Button
              title="I have transfered"
              customStyles={styles.btn}
              onPress={() => transfer(session, id, setTransferred)}
            />
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default InitiatedTradeScreen;

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
  waiting: {
    backgroundColor: "red",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  waitingText: {
    color: colors.white,
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
  noteWrapper: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  note: {
    color: colors.red,
    fontWeight: "600",
    fontSize: 18,
  },
  noteText: {
    color: colors.red,
  },
  account: {
    backgroundColor: colors.blueTransparent,
    borderRadius: 32,
    width: "80%",
    alignSelf: "center",
    paddingVertical: 20,
    paddingHorizontal: 40,
    marginVertical: 20,
    marginBottom: 40,
  },
  title: {
    color: colors.textLight,
    marginBottom: 10,
  },
  detail: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  btnWrapper: {
    marginBottom: 40,
    paddingHorizontal: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  disputeWrapper: {
    width: "100%",
  },
  btn: {
    paddingHorizontal: 20,
    width: "100%",
  },
});
