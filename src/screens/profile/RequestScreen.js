import React from "react";
import { StyleSheet, View } from "react-native";
import ScreenHeader from "../../components/ScreenHeader";

export default function RequestScreen() {

  return (
    <View style={styles.container}>
      <ScreenHeader heading="Requests" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
