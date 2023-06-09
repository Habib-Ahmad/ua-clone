import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import EmptyBank from "../../components/bank/EmptyBank";
import ManageBankCard from "../../components/bank/ManageBankCard";
import ButtonLight from "../../components/input/ButtonLight";
import ScreenHeader from "../../components/ScreenHeader";
import { colors } from "../../utils";

const DATA = [
  {
    name: "United Bank Of Africa",
    accountNumber: "4762",
  },
  {
    name: "Union Bank",
    accountNumber: "4356",
  },
  {
    name: "Polaris Bank",
    accountNumber: "6543",
  },
];

export default function ManageBanks() {
  const renderItem = ({ item }) => {
    return <ManageBankCard bank={item.name} accountNumber={item.accountNumber} />;
  };
  return (
    <View style={styles.wrapper}>
      <ScreenHeader heading="Manage Banks" />

      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={() => <EmptyBank />}
          style={styles.flatlistStyle}
        />
      </View>

      <View style={styles.button__style}>
        <ButtonLight title="Add Bank" backgroundColor={colors.primaryLight} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  button__style: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
  },
  flatlistStyle: {
    marginBottom: "45%",
  },
});
