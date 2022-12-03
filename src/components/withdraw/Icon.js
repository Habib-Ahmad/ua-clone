import React from "react";
import { StyleSheet, View } from "react-native";
import FluentBuildingBank from "../../assets/FluentBuildingBank";
import { colors } from "../../utils/colors";

export default function Icon({ width, height, type, iconName }) {
  return (
    <View style={styles.wrapper}>
      {iconName ? iconName : <FluentBuildingBank width={width} height={height} type={type} />}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: "center",
    backgroundColor: colors.blueTransparent,
    padding: 10,
    borderRadius: 50,
  },
});
