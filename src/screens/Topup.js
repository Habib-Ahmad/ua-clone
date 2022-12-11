import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import Button from "../components/input/Button";
import Input from "../components/input/Input";
import ScreenHeader from "../components/ScreenHeader";
import Icon from "../components/withdraw/Icon";
import { colors } from "../utils/colors";

export default function Topup() {
  const navigation = useNavigation();

  const [isChecked, setChecked] = useState(false);

  const handlePress = () => {
    navigation.navigate("SuccessfulScreen", {
      type: "topup",
    });
  };
  return (
    <View style={styles.container}>
      <ScreenHeader {...navigation} heading="Add Bank" />

      <ScrollView>
        <Icon width="80" height="80" type="bank" />
        <View style={styles.wrapper}>
          <Input
            label="Select Bank"
            placeholder="Select Bank"
            // onChangeText={setUsername}
            // value={username}
            editable={false}
          />

          <View style={styles.space} />
          <Input
            label="Account Number"
            placeholder="Enter Account Number"
            // onChangeText={setUsername}
            // value={username}
          />
        </View>

        <View style={styles.accountDetails}>
          <View>
            <Icon width="30" height="30" type="bank" />
          </View>
          <View style={styles.detailsStyle}>
            <Text style={styles.name}>Adamu Sherif</Text>
            <Text style={styles.accountNumber}>0104674762</Text>
          </View>
          <View style={styles.checkboxStyle}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? colors.primary : colors.primary}
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.btnStyle}>
        <Button title="Continue" onPress={handlePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginTop: 40,
    paddingHorizontal: 10,
  },
  space: {
    marginBottom: 30,
  },
  btnStyle: {
    position: "absolute",
    width: Dimensions.get("screen").width,
    bottom: 20,
  },

  accountDetails: {
    flexDirection: "row",
    padding: 10,
    borderWidth: 1,
    marginHorizontal: 15,
    marginTop: 50,
    borderRadius: 8,
    borderColor: colors.primary,
  },
  detailsStyle: {
    marginLeft: 10,
    justifyContent: "space-around",
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
  },
  accountNumber: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.textLight,
  },

  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderColor: "red",
    borderWidth: 3,
  },
  checkboxStyle: {
    justifyContent: "center",
  },
});
