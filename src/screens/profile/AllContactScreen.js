import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ContactCard from "../../components/contact/ContactCard";
import EmptyContact from "../../components/contact/EmptyContact";

const DATA = [
  {
    name: "Wade Warren",
    info: "nevaeh.simmons@example.com",
    favorite: true,
  },
  {
    name: "Savannah Nguyen",
    info: "curtis.weaver@example.com",
    favorite: false,
  },
  {
    name: "Aisha Abubakar",
    info: "sara.cruz@example.com",
    favorite: true,
  },
];

const AllContactScreen = ({ transfer }) => {
  const renderItem = ({ item }) => {
    return (
      <ContactCard name={item.name} info={item.info} favorite={item.favorite} transfer={transfer} />
    );
  };
  return (
    <View styles={styles.container}>
      <View style={styles.wrapper}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={() => <EmptyContact />}
        />
      </View>
    </View>
  );
};

export default AllContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: "5%",
    marginTop: "5%",
  },
});
