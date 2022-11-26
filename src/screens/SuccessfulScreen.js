import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Button from "../components/input/Button";
import MarkIcon from "../components/withdraw/MarkIcon";
import { colors } from "../utils/colors";

export default function SuccessfulScreen({ route }) {
  const { amount, type } = route.params;

  const handePress = () => {};
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.centeredBox}>
          <MarkIcon width="50" height="50" />
          {type === "withdraw" ? (
            <View>
              <Text style={styles.amountStyle}>${amount}</Text>
              <Text style={styles.successMessage}>have been successfully {"\n"} withdrawn</Text>
            </View>
          ) : (
            <View>
              <Text style={[styles.successMessage, styles.bankAdded]}>Bank Added Succesfully</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.okBtn}>
        <Button title="Ok, thanks" onPress={handePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    justifyContent: "center", //Centered horizontally
    alignItems: "center", //Centered vertically
    flex: 1,
  },
  centeredBox: {
    width: Dimensions.get("window").width * 0.7,
    alignItems: "center",
    backgroundColor: colors.primaryLight,
    padding: 30,
    paddingVertical: 60,
    borderRadius: 35,
  },
  amountStyle: {
    fontSize: 24,
    fontWeight: "700",
    marginVertical: 30,
    color: colors.primary,
    textAlign: "center",
  },
  successMessage: {
    fontSize: 16,
    textAlign: "center",
  },
  okBtn: {
    bottom: 20,
  },
  bankAdded: {
    marginVertical: 30,
  },
});
