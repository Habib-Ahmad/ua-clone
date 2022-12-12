import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils/colors";

export default function EmptyBank() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.noteInfo}>
        <Text style={{ color: colors.primary }}>Note:</Text>You have no Bank added yet add bank to
        start withrawing your money
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: "5%",
    marginHorizontal: "5%",
  },
  noteInfo: {
    fontSize: 17,
    fontWeight: "400",
    color: colors.textLight,
  },
});
