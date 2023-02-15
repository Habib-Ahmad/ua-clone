import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MerchantProfile = ({ icon, stat, statText, merchant, merchantText, trade, tradeText, ...others }) => {
  return (
    <View style={styles.container} {...others}>
      {icon}
      <View style={styles.textContainer}>
        <View style={styles.textWrapper}>
            <Text style={styles.text}>{stat}</Text>
            <View style={styles.subText}>
                <Text style={[styles.text]}>{statText}</Text>
            </View>
        </View>
        <View style={styles.textWrapper}>
            <Text style={styles.text}>{merchant}</Text>
            <View style={styles.subText}>
                <Text style={styles.text}>{merchantText}</Text>
            </View>
        </View>
        <View style={styles.textWrapper}>
            <Text style={styles.text}>{trade}</Text>
            <View style={styles.subText}>
                <Text style={styles.text}>{tradeText}</Text>
            </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  textContainer: {
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 12,
    lineHeight: 20,
    fontWeight: "500",
  },
  textWrapper: {
    flexDirection: "row",
  },
  subText: {
    marginLeft: 5
  }
});

export default MerchantProfile;
