import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import QuickShareCard from "../components/quickShare/QuickShareCard";
import ScreenHeader from "../components/ScreenHeader";

const DATA = [
  {
    name: "Ultra Profile link ",
    info: "Shereefadamu001@gmail.com",
    type: "ultra",
  },
  {
    name: "Top up wallet",
    info: "0104674762  Sterlin Bank",
    type: "topup",
  },
  {
    name: "BTC Address",
    info: "6543",
    type: "btc",
  },
  {
    name: "ETH Address",
    info: "0x269ebbee27a823bf27df.......",
    type: "eth",
  },
  {
    name: "USDT Address",
    info: "0x269ebbee27a823bf27df.......",
    type: "usdt",
  },
];

export default function QuickShare() {
  const renderItem = ({ item }) => {
    return <QuickShareCard name={item.name} info={item.info} type={item.type} />;
  };
  return (
    <View>
      <ScreenHeader heading="Quick Share" />

      <View style={styles.wrapper}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: "5%",
  },
});
