import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TopupBlue from "../../assets/TopupBlue";
import Button from "../../components/input/Button";
import Input from "../../components/input/Input";
import Select from "../../components/input/Select";
import ScreenHeader from "../../components/ScreenHeader";
import actions from "../../context/actions";
import { useGlobalContext } from "../../context/context";
import { getCurrencies } from "../../functions";
import { colors } from "../../utils";

const TopupScreen = ({ navigation }) => {
  const { state, dispatch } = useGlobalContext();

  const localWalletId = state.balance.fiat.wallets?.find((wallet) => wallet.isLocal).id;
  const selectedWalletId = state.activeWallet.id;
  const isLocalTopup = localWalletId === selectedWalletId;

  const [amount, setAmount] = useState("");
  const [currencies, setCurrencies] = useState([]);
  const [currency, setCurrency] = useState();

  useEffect(() => {
    if (!isLocalTopup) {
      const getData = async () => {
        const res = await getCurrencies();
        setCurrencies(res);
      };
      getData();
    }
  }, [isLocalTopup]);

  const handlePress = () => {
    if (isLocalTopup) {
      dispatch({ type: actions.topup.setAmount, payload: amount });
    } else {
      dispatch({
        type: actions.topup.setPaymentCurrencyId,
        payload: { amount, paymentCurrencyId: currency },
      });
    }
    navigation.navigate("TopupMethodScreen");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ScreenHeader heading="Top up" />

      <View style={styles.iconWrapper}>
        <TopupBlue />
      </View>

      <View style={styles.inputWrapper}>
        <Input
          label="Enter Amount"
          keyboardType="numeric"
          onChangeText={setAmount}
          value={amount.trim()}
        />

        {!isLocalTopup && (
          <>
            <View style={styles.space} />

            <Select
              label="Payment Currency"
              placeholder="Select payment currency"
              options={currencies}
              value={currency}
              setValue={setCurrency}
              itemLabelKeys={["name"]}
              itemValueKeys={["id"]}
            />

            <Text style={styles.note}>
              Note: Payment currency is the currency you plan to send to the merchant
            </Text>
          </>
        )}
      </View>

      <View style={styles.flex} />

      <Button title="Continue" onPress={handlePress} disabled={!amount} />
    </ScrollView>
  );
};

export default TopupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  flex: {
    flex: 1,
  },
  iconWrapper: {
    marginTop: 10,
    marginBottom: 80,
    alignItems: "center",
  },
  inputWrapper: {
    paddingHorizontal: "5%",
  },
  space: {
    height: 40,
  },
  note: {
    color: colors.textLight,
    marginTop: 20,
    paddingHorizontal: 10,
  },
});
