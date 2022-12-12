import React from "react";
import { StyleSheet, View } from "react-native";
import FluentBuildingBank from "../../assets/FluentBuildingBank";

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
  },
});
