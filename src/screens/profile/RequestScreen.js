import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import DisplayCard from "../../components/DisplayCard";
import ScreenHeader from "../../components/ScreenHeader";
import { colors } from "../../utils";

export default function RequestScreen({ route }) {
  const { data } = route?.params || "";

  return (
    <View style={styles.container}>
      <ScreenHeader heading="Requests" />

      {data.map((item, index) => {
        return (
          <DisplayCard key={index} onPress={() => {}}>
            <View>
              <Image source={require("../../assets/avatar.jpg")} style={styles.imageStyle} />
            </View>
            <View style={styles.infoWrapper}>
              <Text style={styles.heading}>{item.name}</Text>
              <Text style={styles.paragraph}>{item.email}</Text>
              <Text style={styles.paragraph}>Type: {item.type}</Text>
              <Text style={styles.paragraph}>
                Amount: <Text style={{ color: colors.primary }}>{item.amount}</Text>
              </Text>
              <Text style={styles.paragraph}>Date: {item.date}</Text>
            </View>
          </DisplayCard>
        );
      })}
    </View>
  );
}

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
