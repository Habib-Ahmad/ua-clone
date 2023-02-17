import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils/colors";

export default function RatingHeaderText ({ headerText, bodyText }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{headerText}</Text>
      <Text style={styles.body}>{bodyText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 10
  },
  header: {
    fontSize: 54,
    textAlign: "center",
    fontWeight: "900",
    color: colors.primary
  },
  body: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500"
  },
});

