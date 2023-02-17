import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import DisplayCard from "../../../components/DisplayCard";
import { colors } from "../../../utils/colors";

const requests = [
  {
    id: 1,
    name: "Wade Warren",
    email: "nevaeh.simmons@example.com",
    type: "Withdrawal",
    amount: "₦20,000",
    status: "Completed",
    date: "20th Aug 2023  9:30am",
  },
  {
    id: 1,
    name: "Wade Jude",
    email: "nevaeh.simmons@example.com",
    type: "Withdrawal",
    amount: "₦20,000",
    status: "Completed",

    date: "20th Aug 2023  9:30am",
  },
  {
    id: 1,
    name: "Tunde Hammed",
    email: "nevaeh.simmons@example.com",
    type: "Withdrawal",
    amount: "₦20,000",
    status: "Completed",

    date: "20th Aug 2023  9:30am",
  },
];

const Topup = () => {
  return (
    <View style={styles.container}>
      {requests.map((item, index) => {
        return (
          <DisplayCard key={index} onPress={() => {}}>
            <View>
              <Image source={require("../../../assets/avatar.jpg")} style={styles.imageStyle} />
            </View>
            <View style={styles.infoWrapper}>
              <Text style={styles.heading}>{item.name}</Text>
              <Text style={styles.paragraph}>{item.email}</Text>
              <Text style={styles.paragraph}>Type: {item.type}</Text>
              <Text style={styles.paragraph}>
                Amount: <Text style={{ color: colors.primary }}>{item.amount}</Text>
              </Text>
              <Text style={styles.paragraph}>
                Status: <Text style={{ color: colors.primary }}>{item.status}</Text>
              </Text>
              <Text style={styles.paragraph}>Date: {item.date}</Text>
            </View>
          </DisplayCard>
        );
      })}
    </View>
  );
};

export default Topup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  infoWrapper: {
    marginLeft: 10,
  },

  heading: {
    fontSize: 20,
    fontWeight: "900",
  },
  paragraph: {
    fontSize: 14,
    marginVertical: 2,
    color: colors.textLight,
  },
});
