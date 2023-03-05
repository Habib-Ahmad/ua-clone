import React from "react";
import { StyleSheet, View } from "react-native";
import RatingHeaderText from "../../components/ratings/RatingHeaderText";
import ScreenHeader from "../../components/ScreenHeader";
import MerchantHistoryTabs from "../../stacks/MerchantHistoryTabs";

export default function RatingScreen() {

  return (
    <View style={styles.container}>
      <ScreenHeader heading="Ratings" />
      <RatingHeaderText
        headerText={"3.2"}
        bodyText={"Total Ratings"}
      />
        <MerchantHistoryTabs/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
