import React from "react";
import { StyleSheet, View } from "react-native";
import BTC from "../../assets/BTC";
import { colors } from "../../utils/colors";

export default function BTCIcon({ width, height }) {
  return (
    <View style={styles.wrapper}>
      <BTC width={width} height={height} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: 50,
    backgroundColor: colors.BTCColor,
  },
});
