import { useEffect } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import actions from "../../context/actions";
import { useGlobalContext } from "../../context/context";
import { colors } from "../../utils";

const MoneyScreen = ({ navigation, setBalance, setActiveTab, isFocused }) => {
  const {
    state: {
      balance: {
        fiat: { wallets },
      },
    },
    dispatch,
  } = useGlobalContext();

  useEffect(() => {
    if (isFocused) {
      setActiveTab("money");
      setBalance();
    }
  }, [isFocused, setBalance, setActiveTab]);

  const handlePress = (item) => {
    setBalance(
      `${item?.currency?.symbol}${String(item?.balance).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
    );
    dispatch({ type: actions.setActiveWallet, payload: item });
  };

  if (!wallets || !wallets.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.noWallet}>You have no wallets</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview} showsVerticalScrollIndicator={false}>
        {wallets.map((item) => (
          <TouchableOpacity key={item.id} style={styles.wallet} onPress={() => handlePress(item)}>
            <Text style={styles.symbol}>{item?.currency?.symbol.slice(0, 1)}</Text>

            <Text style={styles.walletName}>
              {item?.currency?.name} {`(${item?.currency.symbol})`}
            </Text>

            <View style={styles.balanceWrapper}>
              <Text style={styles.balance}>{`${item?.currency?.symbol}${String(
                item?.balance
              ).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</Text>
              <Text style={styles.percentage}>{"100%"}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.add}>
        <TouchableOpacity
          style={styles.addBtn}
          activeOpacity={0.6}
          onPress={() => navigation.navigate("AddFiatWalletScreen")}
        >
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
        <Text style={styles.addTxt}>Add wallet</Text>
      </View>
    </View>
  );
};

export default MoneyScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
  },
  scrollview: {
    flex: 1,
  },
  wallet: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  symbol: {
    backgroundColor: colors.primaryLight,
    color: colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
    lineHeight: 45,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 30,
  },
  walletName: {
    flex: 1,
    paddingLeft: 15,
    fontSize: 16,
  },
  balance: {
    textAlign: "right",
    fontWeight: "600",
    color: colors.primary,
    fontSize: 16,
  },
  percentage: {
    textAlign: "right",
    color: colors.green,
    padding: 2,
    backgroundColor: colors.greenLight,
    borderRadius: 12,
    width: 60,
    fontSize: 12,
    marginLeft: "auto",
  },
  add: {
    position: "absolute",
    right: 20,
    bottom: 25,
    alignItems: "center",
  },
  addBtn: {
    backgroundColor: colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 5,
  },
  addTxt: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "600",
    marginTop: 5,
  },
  plus: {
    color: colors.white,
    fontSize: 36,
    flex: 1,
    alignSelf: "center",
  },
  noWallet: {
    textAlign: "center",
    fontSize: 18,
    color: colors.textLight,
    marginTop: 20,
  },
});
