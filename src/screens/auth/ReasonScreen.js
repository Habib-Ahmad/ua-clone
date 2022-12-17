import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Checkbox from "expo-checkbox";
import Button from "../../components/input/Button";
import Input from "../../components/input/Input";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";
import actions from "../../context/actions";
import { useGlobalContext } from "../../context/context";
import { colors } from "../../utils/colors";

const ReasonScreen = ({ navigation }) => {
  const { dispatch } = useGlobalContext();

  const [reasonsState, setReasonsState] = useState([
    {
      reason: "Make online payments",
      isChecked: false,
    },
    {
      reason: "Spend or save money",
      isChecked: false,
    },
    {
      reason: "Gain exposure to crypto assets",
      isChecked: false,
    },
    {
      reason: "Send and manage money",
      isChecked: false,
    },
    {
      reason: "Spend while travelling",
      isChecked: false,
    },
  ]);
  const [otherReason, setOtherReason] = useState("");

  const reason = reasonsState.find((item) => item.isChecked === true) || otherReason;
  const reasons = reasonsState.filter((item) => item.isChecked).map((item) => item.reason);

  const handleChange = (e, index) => {
    setReasonsState((prev) => {
      let current = [...prev];
      current[index].isChecked = e;
      return current;
    });
  };

  const onPress = async () => {
    if (otherReason) reasons.push(otherReason);
    dispatch({ type: actions.registeringUser.set, payload: { reasons } });
    navigation.navigate("SignupScreen");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ScreenHeaderWithLogo
          heading="Reason"
          paragraph="We want to provide you with the best experience according to your need"
        />

        {reasonsState.map((reason, idx) => (
          <View key={idx} style={styles.section}>
            <Checkbox
              style={styles.checkbox}
              value={reason.isChecked}
              onValueChange={(e) => handleChange(e, idx)}
              color={reason.isChecked ? colors.primary : undefined}
            />
            <Text style={styles.reasonText}>{reason.reason}</Text>
          </View>
        ))}

        <View style={styles.inputWrapper}>
          <Input label="Other" value={otherReason} onChangeText={setOtherReason} />
        </View>
      </ScrollView>

      <Button title="Continue" onPress={onPress} disabled={!reason} />
    </View>
  );
};

export default ReasonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  section: {
    borderWidth: 1,
    borderColor: colors.greyLight,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 20,
  },
  reasonText: {
    color: colors.textLight,
    marginLeft: 10,
  },
  inputWrapper: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
});
