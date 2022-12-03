import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BTCIcon from "../components/currency/BTCIcon";
import Button from "../components/input/Button";
import ScreenHeaderWithoutLogo from "../components/ScreenHeaderWithoutLogo";
import Icon from "../components/withdraw/Icon";
import { colors } from "../utils/colors";

export default function SwapDetailsScreen() {
  const navigation = useNavigation();

  const handleConfirm = () => {
    navigation.navigate("SuccessfulScreen", {
      type: "swap",
    });
  };
  return (
    <View style={styles.container}>
      <ScreenHeaderWithoutLogo heading={"Swap"} {...navigation} />
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.flexRow}>
            <View>
              <BTCIcon width={40} height={40} />
            </View>
            <View style={styles.flexTwo}>
              <Text style={styles.heading}>0.234 BTC</Text>
              <Text style={styles.paragraph}>TRC 20</Text>
            </View>
          </View>

          <View style={styles.arrowDownStyle}>
            <AntDesign name="arrowdown" size={24} color={colors.black} />
          </View>

          <View style={styles.flexRow}>
            <View>
              <Icon width={30} height={30} />
            </View>
            <View style={styles.flexTwo}>
              <Text style={styles.heading}>₦124,338.79</Text>
              <Text style={styles.paragraph}>ULTRA</Text>
            </View>
          </View>

          <View style={styles.details}>
            <View style={styles.detailsRow}>
              <Text style={styles.detailsHeading}>From</Text>
              <Text style={styles.detailsParagraph}>0x995da37d0d0....</Text>
            </View>

            <View style={styles.detailsRow}>
              <Text style={styles.detailsHeading}>Provider</Text>
              <Text style={[styles.detailsParagraph, { color: colors.primary }]}>Ultra</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.confirmButtonStyle}>
        <Button title={"Confirm"} backgroundColor={colors.primary} onPress={handleConfirm} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: "5%",
  },
  flexRow: {
    flexDirection: "row",
  },
  flexTwo: {
    justifyContent: "space-around",
    marginLeft: "3%",
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
  },
  paragraph: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.textLight,
  },
  arrowDownStyle: {
    marginVertical: "10%",
    paddingLeft: "3%",
  },

  detailsRow: {
    flexDirection: "row",
    marginVertical: 10,
  },
  detailsHeading: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
  },
  detailsParagraph: {
    fontSize: 14,
    fontWeight: "500",
  },
  details: {
    marginTop: "10%",
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.primaryLight,
    borderColor: colors.primary,
  },
  confirmButtonStyle: {
    position: "absolute",
    bottom: 20,
    right: 0,
    left: 0,
  },
});
