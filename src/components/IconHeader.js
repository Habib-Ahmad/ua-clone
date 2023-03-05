import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../utils/colors";

const IconHeader = ({ data, onPress }) => {
  return (
    <View style={styles.wrapper}>
      {data.map((item, index) => {
        return (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => onPress(item)}
            activeOpacity={0.8}
            key={index}
          >
            <View>{item.icon}</View>
            <Text style={styles.text}>{item.text}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default IconHeader;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "5%",
    borderWidth: 0.5,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: colors.greyDark,
    marginTop: 20,
  },
  itemContainer: {
    alignItems: "center",
    width: "22%",
  },

  text: {
    fontWeight: "500",
    fontSize: 12,
    marginTop: 10,
  },
});
