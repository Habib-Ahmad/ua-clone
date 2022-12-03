import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Mark from "../../assets/Mark";
import { colors } from "../../utils/colors";

export default function MarkIcon({ width, height }) {
  return (
    <View style={styles.wrapper}>
      <Mark width={width} height={height} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: "center",
    backgroundColor: colors.blueTransparent,
    padding: 35,
    borderRadius: 100,
  },
});
