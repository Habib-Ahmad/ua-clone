import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "../../api/axios";
import urls from "../../api/urls";
import Copy from "../../assets/Copy";
import Button from "../../components/input/Button";
import ScreenHeader from "../../components/ScreenHeader";
import Trade from "../../components/Trade";
import actions from "../../context/actions";
import { useGlobalContext } from "../../context/context";
import { copyToClipboard } from "../../functions";
import { colors, formatTime } from "../../utils";

const InitiatedTradeScreen = ({ route, navigation }) => {
  const { id, total, symbol, session, trade, tradeId } = route.params;

  const { state, dispatch } = useGlobalContext();

  const [fetchedTrade, setFetchedTrade] = useState();
  const [timeLeft, setTimeLeft] = useState(20 * 60 * 1000);
  const [transferred, setTransferred] = useState(false);
  const [tradeCompleted, setTradeCompleted] = useState(false);

  useEffect(() => {
    if (!trade) {
      const fetchTrade = async () => {
        await axios
          .get(`${urls.p2p.getTrade}/${tradeId}`)
          .then((res) => setFetchedTrade(res.data.data));
      };
      fetchTrade();
    }
  }, [trade, tradeId]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          return prevTime;
        } else {
          return prevTime - 1000;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (tradeCompleted) {
      const updateWallet = async () => {
        await Promise.all([axios.get(urls.fiat.worth), axios.get(urls.fiat.baseUrl)]).then(
          ([res1, res2]) => {
            dispatch({ type: actions.setFiatWorth, payload: res1.data.data });
            dispatch({ type: actions.setFiatWallets, payload: res2.data.data });
          }
        );
        navigation.navigate("SuccessScreen", {
          text: "Trade completed",
          route: "HomeScreen",
        });
      };
      updateWallet();
      return;
    }

    console.log({ sessionId: session?.sessionId, id });

    const completedEvent = state.realTimeData.findIndex(
      (item) =>
        (item.event.label === "TradeCompleted" && item.data.sessionId === session?.sessionId) || id
    );

    if (completedEvent > -1) {
      setTradeCompleted(true);
    }
  }, [dispatch, id, navigation, session?.sessionId, state.realTimeData, tradeCompleted]);

  const handlePress = async () => {
    await axios
      .post(urls.payment.sent, {
        tradeSessionId: session?.sessionId || id,
      })
      .then(() => {
        setTransferred(true);
      });
  };

  const cancelTrade = async () => {
    await axios
      .post(urls.trades.cancel, {
        tradeSessionId: session?.sessionId || id,
        reason: "string",
      })
      .then(() => {
        navigation.navigate("HomeScreen");
      });
  };

  const dispute = async () => {};

  return (
    <ScrollView style={styles.container}>
      <ScreenHeader heading="Trade Initiated" />

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
            <Button
              title="Dispute"
              backgroundColor={colors.red}
              onPress={() => dispute("HomeScreen")}
            />
          </View>
        ) : (
          <>
            <Button
              title="Cancel"
              backgroundColor={colors.red}
              customStyles={styles.btn}
              onPress={cancelTrade}
            />
            <Button title="I have transfered" customStyles={styles.btn} onPress={handlePress} />
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
