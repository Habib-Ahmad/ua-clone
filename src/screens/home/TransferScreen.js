import { useCallback, useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import axios from "../../api/axios";
import urls from "../../api/urls";
import EnterPin from "../../components/EnterPin";
import Button from "../../components/input/Button";
import CustomModal from "../../components/input/CustomModal";
import Input from "../../components/input/Input";
import Select from "../../components/input/Select";
import Loader from "../../components/Loader";
import ScreenHeader from "../../components/ScreenHeader";
import { useGlobalContext } from "../../context/context";
import { getFiatData } from "../../functions";

const TransferScreen = ({ navigation }) => {
  const { state, dispatch } = useGlobalContext();

  const wallets = state.balance.fiat.wallets;

  const [walletId, setWalletId] = useState(null);
  const [amount, setAmount] = useState("");
  const [narration, setNarration] = useState("");
  const [recipient, setRecipient] = useState("");
  const [name, setName] = useState("");
  const [pin, setPin] = useState("");
  const [displayModal, setDisplayModal] = useState(false);

  useEffect(() => {
    if (pin.length === 4) {
      transfer();
    }
  }, [pin.length, transfer]);

  const initiateTransfer = async () => {
    await axios
      .post(urls.fiat.initiateTransfer, {
        recipient,
        amount,
        walletId,
      })
      .then((res) => {
        setName(res.data.data.recipient);
      });
  };

  const transfer = useCallback(async () => {
    await axios
      .post(urls.fiat.initiateTransfer, {
        recipient,
        amount,
        walletId,
        comment: narration,
        pin,
        saveBeneficiary: false,
      })
      .then(() => {
        getFiatData(dispatch);
        navigation.navigate("SuccessScreen", { text: "Transfer successful", route: "HomeScreen" });
      });
  }, [amount, dispatch, narration, navigation, pin, recipient, walletId]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Loader loading={state.loading} />
      <ScreenHeader heading="Transfer" />

      <View style={styles.inputContainer}>
        <Select
          label="Wallet"
          value={walletId}
          setValue={setWalletId}
          options={wallets}
          itemLabelKeys={["currency", "name"]}
          itemValueKeys={["id"]}
        />

        <View style={styles.space} />

        <Input
          label="Enter Amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        <View style={styles.space} />

        <Input
          label="Recipient E-mail, tag or phone number"
          value={recipient}
          onChangeText={setRecipient}
        />

        {!name && (
          <>
            <View style={styles.space} />
            <Button
              title="Fetch user"
              onPress={initiateTransfer}
              disabled={!walletId || !amount || !recipient}
            />
          </>
        )}

        {!name && (
          <>
            <View style={styles.space} />

            <Input label="Recipient Name" value={name} editable={false} />

            <View style={styles.space} />

            <Input
              label="Narration (optional)"
              value={narration}
              onChangeText={setNarration}
              numberOfLines={4}
            />

            <View style={styles.space} />

            <Button title="Continue" onPress={() => setDisplayModal(true)} />
          </>
        )}
      </View>

      <CustomModal modalVisible={displayModal} setModalVisible={setDisplayModal}>
        <EnterPin setPin={setPin} />
      </CustomModal>
    </ScrollView>
  );
};

export default TransferScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    minHeight: Dimensions.get("screen").height,
  },
  inputContainer: {
    paddingHorizontal: "5%",
    paddingVertical: 40,
  },
  space: {
    height: 40,
  },
});
