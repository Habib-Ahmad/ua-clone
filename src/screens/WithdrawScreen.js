import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/input/Button";
import Input from "../components/input/Input";
import ScreenHeader from "../components/ScreenHeader";
import Icon from "../components/withdraw/Icon";
import { colors } from "../utils/colors";

export default function WithdrawScreen() {
  const navigation = useNavigation();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  const handlePress = () => {
    navigation.navigate("ReviewSummaryScreen", {
      withdraw: "true",
    });
  };
  
  return (
    <View style={styles.container}>
      <ScreenHeader {...navigation} heading="Withdraw" />

      <ScrollView>
        <Icon width="80" height="80" type="bank" />

        <View style={styles.wrapper}>
          <Input
            label="Amount"
            placeholder="Enter Amount"
            // onChangeText={setUsername}
            // value={username}
          />

          <View style={styles.space} />

          <Input
            label="Choose Bank"
            placeholder="Access bank"
            // onChangeText={setUsername}
            // value={username}
          />

          <View style={styles.space} />

          <Input
            label="Account Number"
            placeholder="Enter Account Number"
            // onChangeText={setUsername}
            // value={username}
          />

          <View style={styles.switchStyle}>
            <View style={styles.saveBankBox}>
              <Text style={styles.saveBank}>Save This Bank</Text>
            </View>
            <View>
              <Switch
                trackColor={{ false: colors.primaryLight, true: colors.primary }}
                thumbColor={isEnabled ? colors.white : colors.primary}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.btn__style}>
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
  btn__style: {
    position: "absolute",
    width: Dimensions.get("screen").width,
    bottom: 20,
  },
  switchStyle: {
    marginTop: 0,
    marginLeft: 5,
    flexDirection: "row",
  },
  saveBank: {
    fontSize: 15,
    fontWeight: "500",
  },
  saveBankBox: {
    justifyContent: "center",
  },
});
