import { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import axios from "../../api/axios";
import urls from "../../api/urls";
import CustomModal from "../../components/input/Modal";
import ScreenHeader from "../../components/ScreenHeader";
import Trade from "../../components/Trade";
import { colors } from "../../utils/colors";

const TradesScreen = ({ navigation }) => {
  const [trades, setTrades] = useState([]);
  const [selectedTrade, setSelectedTrade] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getTrades();
  }, []);

  const getTrades = async () => {
    await axios.get(`${urls.p2p.getLocalTrades}?pageNumber=1&pageSize=10`).then((res) => {
      setTrades(res.data.data);
    });
  };

  const handlePress = (trade) => {
    setSelectedTrade(trade);
    setModalVisible(true);
  };

  const initiateTrade = () => {
    setModalVisible(false);
    navigation.navigate("InitiatedTradeScreen", { trade: selectedTrade });
  };

  if (!trades.length) {
    return (
      <View style={styles.container}>
        <ScreenHeader heading="Available Trades" />

        <ActivityIndicator size={40} color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScreenHeader heading="Available Trades" />

      <ScrollView style={styles.trades}>
        {trades?.map((trade) => (
          <Trade key={trade.id} trade={trade} handlePress={handlePress} />
        ))}
      </ScrollView>

      <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <>
          <Text style={styles.modalText}>
            You are about to initiate a trade with this trader, proceed?
          </Text>
          <View style={styles.buttonWrapper}>
            <Pressable
              style={[styles.button, styles.buttonNo]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>No</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.buttonYes]} onPress={initiateTrade}>
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable>
          </View>
        </>
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
    width: "90%",
  },
  button: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 30,
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
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
