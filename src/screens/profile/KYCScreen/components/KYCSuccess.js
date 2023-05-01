import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Success from "../../../../assets/Success";

const KYCSuccess = () => {
  return (
    <View style={styles.container}>
      <Success />
      <Text style={styles.heading}>Documents uploaded successfully</Text>
      <Text style={styles.text}>
        Please wait for your documents to be reviewed. We will get back to you shortly.
      </Text>
    </View>
  );
};

export default KYCSuccess;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 40,
    padding: "10%",
  },
  heading: {
    marginTop: 40,
    fontSize: 22,
    textAlign: "center",
    lineHeight: 25,
  },
  text: {
    marginTop: 20,
    textAlign: "center",
  },
});
