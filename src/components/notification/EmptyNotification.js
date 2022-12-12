import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

export default function EmptyNotification() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.info}>
          <Text style={styles.heading}>Empty</Text>
          <Text style={styles.txt}>You dont have any notifications yet</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "700",
  },

  txt: {
    fontSize: 14,
  },

  info: {
    height: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center",
  },
});
