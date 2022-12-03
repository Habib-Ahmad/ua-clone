import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import QuickShareIcon from "../../assets/QuickShare";
import Icon from "../withdraw/Icon";

export default function QuickShareCard({ name, info }) {
  return (
    <View>
      <View style={styles.flexRow}>
        <View>
          <Icon width={"30"} height={"30"} />
        </View>
        <View style={styles.flexTwo}>
          <Text style={styles.heading}>{name} </Text>
          <Text style={styles.info}>{info}</Text>
        </View>
        <TouchableOpacity style={styles.flexThree} activeOpacity={0.6}>
          <QuickShareIcon width="21" height="21" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    marginBottom: "5%",
    paddingVertical: "2%",
  },
  flexTwo: {
    flex: 1,
    justifyContent: "space-around",
    marginLeft: "2%",
  },
  flexThree: {
    justifyContent: "center",
  },
  heading: {
    fontWeight: "500",
    fontSize: 16,
  },
  info: {
    fontWeight: "500",
    fontSize: 14,
  },
});
