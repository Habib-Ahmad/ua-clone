import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../utils/colors";

const IconHeader = ({ data, onPress }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onPress(item)} activeOpacity={0.8}>
      <View style={styles.iconContainer}>{item.icon}</View>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      contentContainerStyle={styles.flatList}
      horizontal={true}
    />
  );
};

export default IconHeader;

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: "center",
    marginRight: 20,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.greyLight,
    borderRadius: 100,
    height: 70,
    width: 70,
  },
  text: {
    fontWeight: "500",
    fontSize: 12,
    marginTop: 10,
  },
  flatList: {
    marginTop: "10%",
    paddingHorizontal: 20,
  },
});
