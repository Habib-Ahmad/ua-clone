import { useCallback, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "../../api/axios";
import urls from "../../api/urls";
import Building from "../../assets/Building";
import Button from "../../components/input/Button";
import Input from "../../components/input/Input";
import Select from "../../components/input/Select";
import Loader from "../../components/Loader";
import ScreenHeader from "../../components/ScreenHeader";
import actions from "../../context/actions";
import { useGlobalContext } from "../../context/context";
import { colors } from "../../utils";

const WithdrawScreen = ({ navigation }) => {
  const { state, dispatch } = useGlobalContext();
  const { loading } = state;

  const [amount, setAmount] = useState("");
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [paymentMethodId, setPaymentMethodId] = useState(null);
  const [banks, setBanks] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    getPaymentMethods();
  }, []);

  useEffect(() => {
    if (!banks.length) {
      getBanksFromPaymentMethods();
    }
  }, [getBanksFromPaymentMethods, banks]);

  const getBanksFromPaymentMethods = useCallback(async () => {
    await axios.get(urls.trades.getPaymentMethods).then((res) => {
      setBanks(res.data.data);
    });
  }, []);

  const getPaymentMethods = async () => {
    await axios.get(urls.system.paymentMethods).then((res) => {
      setPaymentMethods(res.data.data);
    });
  };

  const handlePress = () => {
    dispatch({
      type: actions.withdrawal.setAmount,
      payload: { amount, paymentMethodId: id },
    });
    navigation.navigate("SellFiatTradesScreen");
  };

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <ScrollView>
        <ScreenHeader heading="Withdraw" />

        <View style={styles.iconContainer}>
          <Building />
        </View>

        <View style={styles.wrapper}>
          <Input
            label="Amount"
            placeholder="Enter Amount"
            onChangeText={setAmount}
            value={amount}
            keyboardType="numeric"
          />

          <View style={styles.space} />

          <Select
            label="Payment method"
            placeholder="Select payment method"
            options={paymentMethods}
            value={paymentMethodId}
            setValue={setPaymentMethodId}
            itemLabelKeys={["name"]}
            itemValueKeys={["id"]}
          />

          <View style={styles.space} />

          {paymentMethodId && (
            <>
              <Select
                label="Bank"
                placeholder="Select bank"
                options={banks?.filter((bank) => bank.paymentMethod.id === paymentMethodId)}
                value={id}
                setValue={setId}
                itemLabelKeys={["bank", "bankName"]}
                itemValueKeys={["id"]}
              />

              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.add}
                onPress={() => navigation.navigate("AddBankScreen")}
              >
                <Text style={styles.addText}>Add bank</Text>
              </TouchableOpacity>
            </>
          )}

          <View style={styles.space} />
          <Button title="Continue" onPress={handlePress} disabled={!amount || !id} />
        </View>
      </ScrollView>
    </View>
  );
};

export default WithdrawScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  wrapper: {
    marginTop: 40,
    paddingHorizontal: "5%",
  },
  space: {
    marginBottom: 30,
  },
  iconContainer: {
    alignSelf: "center",
    marginBottom: 20,
  },
  add: {
    alignSelf: "flex-end",
    marginTop: 5,
    marginRight: 10,
  },
  addText: {
    fontWeight: "600",
    color: colors.primaryDark,
  },
});
