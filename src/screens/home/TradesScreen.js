import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "../../api/axios";
import urls from "../../api/urls";
import Avatar from "../../assets/Avatar";
import ScreenHeader from "../../components/ScreenHeader";
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
          <TouchableOpacity key={trade.id} style={styles.trade} onPress={() => handlePress(trade)}>
            <Avatar />

            <View style={styles.details}>
              <View style={styles.detail}>
                <Text style={styles.title}>Merchant:</Text>
                <Text style={styles.text}>
                  {trade.user.firstName} {trade.user.lastName}
                </Text>
              </View>
              <View style={styles.detail}>
                <Text style={styles.title}>Method(s):</Text>
                <Text style={styles.methodText}>
                  {trade.paymentMethods.map((method, index) => (
                    <Text key={method.id}>
                      {method.name}
                      {trade.paymentMethods.length <= index ? ", " : ""}
                    </Text>
                  ))}
                </Text>
              </View>
              <View style={styles.detail}>
                <Text style={styles.title}>Range:</Text>
                <Text style={styles.rangeText}>
                  {trade.currency.symbol}
                  {trade.min} - {trade.currency.symbol}
                  {trade.max}
                </Text>
              </View>
              <View style={styles.detail}>
                <Text style={styles.title}>Completed Trades:</Text>
                <Text style={styles.text}>{trade.user.tradeStatistic.completed}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
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
          </View>
        </View>
      </Modal>
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
  trade: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderBottomColor: colors.greyLight,
    borderBottomWidth: 1,
  },
  details: {
    marginLeft: 30,
    maxWidth: "80%",
  },
  detail: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  title: {
    marginRight: 10,
    fontSize: 15,
  },
  text: {
    fontSize: 15,
  },
  rangeText: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: "600",
  },
  methodText: {
    fontSize: 15,
    maxWidth: "75%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: "10%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
