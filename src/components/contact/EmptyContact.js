import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils";

export default function EmptyContact() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Empty</Text>
      <Text style={styles.paragraph}>You have no contacts yet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: "5%",
    marginHorizontal: "5%",
    alignItems: "center",
  },
  heading: {
    fontWeight: "700",
    fontSize: 25,
  },
  paragraph: {
    fontSize: 17,
    fontWeight: "400",
    color: colors.textLight,
  },
});
