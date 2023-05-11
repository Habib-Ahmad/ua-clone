import { useCallback, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import axios from "../../api/axios";
import urls from "../../api/urls";
import EnterPin from "../../components/EnterPin";
import Button from "../../components/input/Button";
import CustomModal from "../../components/input/CustomModal";
import Input from "../../components/input/Input";
import Loader from "../../components/Loader";
import ScreenHeader from "../../components/ScreenHeader";
import { useGlobalContext } from "../../context/context";
import { getFiatData } from "../../functions";
import { colors } from "../../utils";

const TransferScreen = ({ navigation }) => {
  const { state, dispatch } = useGlobalContext();

  const { activeWallet } = state;

  const [amount, setAmount] = useState("");
  const [narration, setNarration] = useState("");
  const [recipient, setRecipient] = useState("");
  const [name, setName] = useState("");
  const [pin, setPin] = useState("");
  const [save, setSave] = useState(false);
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
        walletId: activeWallet.id,
      })
      .then((res) => {
        setName(res.data.data.recipient);
      });
  };

  const transfer = useCallback(async () => {
    await axios
      .post(urls.fiat.transfer, {
        recipient,
        amount,
        walletId: activeWallet.id,
        comment: narration,
        pin,
        saveBeneficiary: save,
      })
      .then(() => {
        getFiatData(dispatch);
        navigation.navigate("SuccessScreen", { text: "Transfer successful", route: "HomeScreen" });
      });
  }, [activeWallet.id, amount, dispatch, narration, navigation, pin, recipient, save]);

  return (
    <View>
      <Loader loading={state.loading} />

      <ScrollView>
        <ScreenHeader heading="Transfer" />

        <View style={styles.inputContainer}>
          <Input label="Wallet" value={activeWallet.currency.name} editable={false} />

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
                disabled={!activeWallet.id || !amount || !recipient}
              />
            </>
          )}

          {name && (
            <>
              <View style={styles.space} />

              <Input label="Recipient Name" value={name} editable={false} />
              <View style={styles.beneficiary}>
                <Text style={styles.beneficiaryText}>Save as beneficiary?</Text>
                <Switch
                  onValueChange={setSave}
                  value={save}
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={save ? colors.primary : colors.greyDark}
                  ios_backgroundColor={colors.greyDark}
                />
              </View>

              <View style={styles.space} />

              <Input
                label="Narration"
                value={narration}
                onChangeText={setNarration}
                numberOfLines={4}
              />

              <View style={styles.space} />

              <Button
                title="Continue"
                onPress={() => setDisplayModal(true)}
                disabled={!narration}
              />
            </>
          )}
        </View>

        <CustomModal modalVisible={displayModal} setModalVisible={setDisplayModal}>
          <View style={styles.modal}>
            <EnterPin setPin={setPin} />
          </View>
        </CustomModal>
      </ScrollView>
    </View>
  );
};

export default TransferScreen;

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: "5%",
    paddingVertical: 40,
  },
  space: {
    height: 40,
  },
  modal: {},
  beneficiary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  beneficiaryText: {
    color: colors.primary,
  },
});
