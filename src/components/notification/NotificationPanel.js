import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BellRinging from "../../assets/BellRinging";
import { colors } from "../../utils";

const NotificationPanel = ({ title, date, description, isNew }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.flex}>
        <View style={styles.iconBox}>
          <BellRinging />
        </View>

        <View style={styles.detailBox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>

        {isNew && (
          <View style={styles.isNewStyle}>
            <Text style={styles.isNewTxt}>New</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default NotificationPanel;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 15,
  },
  flex: {
    flexDirection: "row",
    marginTop: 40,
  },
  iconBox: {
    justifyContent: "center",
    padding: 15,
    borderRadius: 50,
    backgroundColor: colors.blueTransparent,
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 16,
    fontWeight: "900",
  },

  date: {
    fontSize: 16,
    fontWeight: "500",
  },
  description: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "500",
  },
  isNewStyle: {
    backgroundColor: colors.primary,
    padding: 5,
    borderRadius: 50,
    alignSelf: "flex-start",
  },
  isNewTxt: {
    fontSize: 10,
    fontWeight: "500",
    color: colors.white,
  },
  detailBox: {
    marginLeft: 10,
    flex: 1,
  },
});
