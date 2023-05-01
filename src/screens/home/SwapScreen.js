import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/input/Button";
import ScreenHeader from "../../components/ScreenHeader";
import Swap from "../../components/Swap";
import { colors } from "../../utils";

export default function SwapScreen() {
  const navigation = useNavigation();

  const handleSwap = () => {
    navigation.navigate("SwapDetailsScreen");
  };
  return (
    <View style={styles.container}>
      <ScreenHeader heading={"Swap"} />
      <ScrollView>
        <View style={styles.wrapper}>
          <Swap />
        </View>
      </ScrollView>
      <View style={styles.swapButton}>
        <Button title={"Swap"} backgroundColor={colors.primary} onPress={handleSwap} />
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

  swapButton: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 20,
  },
});
