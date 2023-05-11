import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import axios from "../../api/axios";
import urls from "../../api/urls";
import CustomModal from "../../components/input/CustomModal";
import ScreenHeader from "../../components/ScreenHeader";
import Trade from "../../components/Trade";
import { useGlobalContext } from "../../context/context";
import { colors } from "../../utils";

const SellFiatTradesScreen = ({ navigation }) => {
  const { state } = useGlobalContext();

  const { activeWallet, balance, withdrawal } = state;

  const [trades, setTrades] = useState(null);
  const [selectedTrade, setSelectedTrade] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const localWalletId = balance.fiat.wallets?.find((wallet) => wallet.isLocal).id;
  const selectedWalletId = activeWallet.id;
  const isLocalWithdrawal = localWalletId === selectedWalletId;

  useEffect(() => {
    if (isLocalWithdrawal) {
      getLocalTrades();
    } else {
      getSwapTrades();
    }
  }, [getLocalTrades, getSwapTrades, isLocalWithdrawal]);

  const getLocalTrades = useCallback(async () => {
    await axios
      .get(
        `${urls.p2p.getLocalSellTrades}?pageNumber=1&pageSize=10&currencyId=${activeWallet.currencyId}`
      )
      .then((res) => {
        setTrades(res.data.data);
      });
  }, [activeWallet.currencyId]);

  const getSwapTrades = useCallback(async () => {
    await axios
      .get(
        `${urls.p2p.getSellSwapTrades}?pageNumber=1&pageSize=10&currencyId=${activeWallet.currencyId}`
      )
      .then((res) => {
        setTrades(res.data.data);
      });
  }, [activeWallet.currencyId]);

  const handleOpen = (trade) => {
    setSelectedTrade(trade);
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
    setSelectedTrade(null);
  };

  const initiateTrade = async () => {
    if (isLocalWithdrawal) {
      await axios
        .post(urls.p2p.initiateFiatSell, {
          amount: Number(withdrawal.amount),
          paymentMethodId: withdrawal.paymentMethodId,
          // walletId: activeWallet.id,
          fiatTradeId: selectedTrade.id,
        })
        .then((res) => {
          navigation.navigate("FiatSellInitiatedScreen", {
            trade: selectedTrade,
            session: res.data.data,
          });
        });
    } else {
      await axios
        .post(urls.p2p.initiateFiatSellSwap, {
          amount: Number(withdrawal.amount),
          paymentMethodId: withdrawal.paymentMethodId,
          // walletId: activeWallet.id,
          fiatTradeId: selectedTrade.id,
        })
        .then((res) => {
          setModalVisible(false);
          navigation.navigate("FiatSellInitiatedScreen", {
            trade: selectedTrade,
            session: res.data.data,
          });
        });
    }
  };

  return (
    <View style={styles.container}>
      <ScreenHeader heading="Trades Screen" />

      {!trades ? (
        <ActivityIndicator size={40} color={colors.primary} />
      ) : !trades.length ? (
        <Text style={styles.noTrade}>No available Trades</Text>
      ) : (
        <ScrollView style={styles.trades}>
          {trades?.map((trade) => (
            <Trade key={trade.id} trade={trade} handlePress={() => handleOpen(trade)} />
          ))}
        </ScrollView>
      )}

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

export default SellFiatTradesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noTrade: {
    fontSize: 16,
    color: colors.textLight,
    textAlign: "center",
    marginTop: 40,
  },
  modal: {
    paddingVertical: 20,
    paddingHorizontal: 10,
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
