import React from "react";
import { StyleSheet, View } from "react-native";
import ScreenHeader from "../../components/ScreenHeader";

export default function MerchantHistoryScreen() {

  return (
    <View style={styles.container}>
      <ScreenHeader heading="History" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
