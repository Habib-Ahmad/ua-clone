import { useState } from "react";
import { Platform, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Checkbox from "expo-checkbox";
import Button from "../../components/input/Button";
import Input from "../../components/input/Input";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";
import { colors } from "../../utils/colors";

const ReasonScreen = ({ navigation }) => {
  const [reasons, setReasons] = useState([
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

  const handleChange = (e, index) => {
    setReasons((prev) => {
      let current = [...prev];
      current[index].isChecked = e;
      return current;
    });
  };

  const verify = () => {
    navigation.navigate("SignupScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView style={styles.scrollView}>
          <ScreenHeaderWithLogo {...navigation} heading="Reason" />

          <Text style={styles.text}>
            We want to provide you with the best experience according to your need
          </Text>

          {reasons.map((reason, idx) => (
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
            <Input label="Other" />
          </View>
        </ScrollView>
      </View>

      <Button title="Continue" onPress={verify} />
    </View>
  );
};

export default ReasonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    paddingBottom: 20,
  },
  content: {
    flex: 1,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: colors.textLight,
    paddingHorizontal: "10%",
    lineHeight: 24,
    marginBottom: 50,
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
