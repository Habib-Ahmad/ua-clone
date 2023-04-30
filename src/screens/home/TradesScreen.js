import { useEffect, useState } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import axios from "../../api/axios";
import urls from "../../api/urls";
import CustomModal from "../../components/input/CustomModal";
import ScreenHeader from "../../components/ScreenHeader";
import Trade from "../../components/Trade";
import { useGlobalContext } from "../../context/context";
import { colors } from "../../utils";

const TradesScreen = ({ navigation }) => {
  const { state } = useGlobalContext();

  const [trades, setTrades] = useState([]);
  const [selectedTrade, setSelectedTrade] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const getTrades = async () => {
      await axios
        .get(
          `${urls.p2p.getLocalTrades}?pageNumber=1&pageSize=10&currencyId=${state.activeWallet.currencyId}`
        )
        .then((res) => {
          setTrades(res.data.data);
        });
    };
    getTrades();
  }, [state.activeWallet.currencyId]);

  const handlePress = (trade) => {
    setSelectedTrade(trade);
    setModalVisible(true);
  };

  const initiateTrade = async () => {
    if (selectedTrade.fiatTrade.fiatTradeRule.isVerified) {
      Alert.alert(
        "Must be verified",
        "You have to be verified to trade with this merchant, please complete your KYC",
        [
          {
            text: "Complete KYC",
            onPress: () => navigation.navigate("KYCScreen"),
          },
          {
            text: "Ok",
          },
        ]
      );
      return;
    }

    // if (selectedTrade.fiatTrade.fiatTradeRule.completed) {
    // }

    await axios
      .post(urls.p2p.initiateTrade, {
        fiatTradeId: selectedTrade.id,
        paymentMethodId: selectedTrade.paymentMethods[0].id,
        amount: state.topup.amount,
      })
      .then((response) => {
        setModalVisible(false);
        navigation.navigate("InitiatedTradeScreen", {
          trade: selectedTrade,
          session: response.data.data,
        });
      });
  };

  const handleClose = () => {
    setModalVisible(false);
    setSelectedTrade(null);
  };

  return (
    <View style={styles.container}>
      <ScreenHeader heading="Available Trades" />

      <ScrollView style={styles.trades}>
        {trades?.map((trade) => (
          <Trade key={trade.id} trade={trade} handlePress={() => handlePress(trade)} />
        ))}
      </ScrollView>
      <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>
            You are about to initiate a trade with this trader, proceed?
          </Text>
          <View style={styles.buttonWrapper}>
            <Pressable style={[styles.button, styles.buttonNo]} onPress={handleClose}>
              <Text style={styles.textStyle}>No</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.buttonYes]} onPress={initiateTrade}>
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable>
          </View>
        </View>
      </CustomModal>
    </View>
  );
};

export default TradesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  trades: {
    flex: 1,
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
  modal: {},
  modalText: {
    textAlign: "center",
    fontSize: 18,
    color: colors.textLight,
  },
});
