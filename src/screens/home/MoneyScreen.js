import { useEffect } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useGlobalContext } from "../../context/context";
import { colors } from "../../utils/colors";

const MoneyScreen = ({ navigation, setActive, setActiveTab, isFocused }) => {
  const {
    state: {
      balance: {
        fiat: { wallets },
      },
    },
  } = useGlobalContext();

  useEffect(() => {
    if (isFocused) {
      setActiveTab("money");
      setActive();
    }
  }, [isFocused, setActive, setActiveTab]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview} showsVerticalScrollIndicator={false}>
        {wallets.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.wallet}
            onPress={() =>
              setActive(
                `${item?.currency?.symbol}${String(item?.balance).replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ","
                )}`
              )
            }
          >
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

      <View>
        <TouchableOpacity
          style={styles.add}
          activeOpacity={0.6}
          onPress={() => navigation.navigate("AddFiatWalletScreen")}
        >
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
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
    backgroundColor: colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 5,
    right: 10,
    bottom: 35,
  },
  plus: {
    color: colors.white,
    fontSize: 36,
    flex: 1,
    alignSelf: "center",
  },
});
