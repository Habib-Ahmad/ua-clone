import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import BTC from "../assets/BTC";
import SwapIcon from "../assets/Swap";
import { colors } from "../utils/colors";
import ButtonTransparent from "./input/ButtonTransparent";
import Icon from "./withdraw/Icon";

export default function Swap() {
  const [toggle, setoToggle] = useState(false);

  const handleToggle = () => {
    setoToggle(!toggle);
  };

  const ToggleButton = () => {
    return (
      <View style={styles.swapBox}>
        <TouchableOpacity activeOpacity={1} style={styles.swapIconStyle} onPress={handleToggle}>
          <SwapIcon properties={true} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {!toggle ? (
          <View>
            <View>
              <Text style={styles.heading}>You pay</Text>

              <View style={styles.flexRow}>
                <View style={styles.flexOne}>
                  <Text style={styles.flexOneText}>0</Text>
                </View>

                <TouchableOpacity style={styles.buttonRow} activeOpacity={0.6}>
                  <View style={styles.flexTwo}>
                    <BTC width={"50"} height={"50"} />
                  </View>
                  <View style={styles.flexThree}>
                    <Text style={styles.flexThreeText}>BTC</Text>
                  </View>
                  <View style={styles.flexFour}>
                    <AntDesign name="right" size={15} color={colors.primary} />
                  </View>
                </TouchableOpacity>
              </View>
              <Text style={styles.balance}>Balance: 59.42 BTC</Text>
            </View>

            <ToggleButton />

            <View>
              <Text style={styles.heading}>You get</Text>

              <View style={styles.flexRow}>
                <View style={styles.flexOne}>
                  <Text style={styles.flexOneText}>0</Text>
                </View>

                <TouchableOpacity style={styles.buttonRow} activeOpacity={0.6}>
                  <View style={styles.flexTwo}>
                    <Icon width={50} height={50} />
                  </View>
                  <View style={styles.flexThree}>
                    <Text style={styles.flexThreeText}>NGN</Text>
                  </View>
                  <View style={styles.flexFour}>
                    <AntDesign name="right" size={15} color={colors.primary} />
                  </View>
                </TouchableOpacity>
              </View>
              <Text style={styles.balance}>Balance: ₦1,334,009.2</Text>
            </View>
          </View>
        ) : (
          <View>
            <View>
              <Text style={styles.heading}>You pay</Text>

              <View style={styles.flexRow}>
                <View style={styles.flexOne}>
                  <Text style={styles.flexOneText}>0</Text>
                </View>

                <TouchableOpacity style={styles.buttonRow} activeOpacity={0.6}>
                  <View style={styles.flexTwo}>
                    <Icon width={50} height={50} />
                  </View>
                  <View style={styles.flexThree}>
                    <Text style={styles.flexThreeText}>NGN</Text>
                  </View>
                  <View style={styles.flexFour}>
                    <AntDesign name="right" size={15} color={colors.primary} />
                  </View>
                </TouchableOpacity>
              </View>
              <Text style={styles.balance}>Balance: ₦1,334,009.2</Text>
            </View>

            <ToggleButton />

            <View>
              <Text style={styles.heading}>You get</Text>
              <View style={styles.flexRow}>
                <View style={styles.flexOne}>
                  <Text style={styles.flexOneText}>0</Text>
                </View>

                <TouchableOpacity style={styles.buttonRow} activeOpacity={0.6}>
                  <View style={styles.flexTwo}>
                    <BTC width={"50"} height={"50"} />
                  </View>
                  <View style={styles.flexThree}>
                    <Text style={styles.flexThreeText}>BTC</Text>
                  </View>
                  <View style={styles.flexFour}>
                    <AntDesign name="right" size={15} color={colors.primary} />
                  </View>
                </TouchableOpacity>
              </View>
              <Text style={styles.balance}>Balance: 59.42 BTC</Text>
            </View>
          </View>
        )}
      </View>

      <View style={styles.flexRow}>
        <View style={styles.percentageButton}>
          <ButtonTransparent backgroundColor={colors.bg} title="25%" />
        </View>
        <View style={styles.percentageButton}>
          <ButtonTransparent backgroundColor={colors.bg} title="50%" />
        </View>
        <View style={styles.percentageButton}>
          <ButtonTransparent backgroundColor={colors.bg} title="75%" />
        </View>
        <View style={styles.percentageButton}>
          <ButtonTransparent backgroundColor={colors.bg} title="100%" />
        </View>
      </View>

      <Text style={styles.overallBalance}>1 BTC = ₦1,334.2 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    padding: "3%",
    borderRadius: 10,
    borderColor: colors.greyLight,
  },

  flexRow: {
    flexDirection: "row",
    paddingVertical: 20,
  },
  flexOne: {
    flex: 1,
    justifyContent: "center",
  },
  flexTwo: {
    justifyContent: "center",
  },
  flexThree: {
    marginHorizontal: 10,
    justifyContent: "center",
  },
  flexFour: {
    justifyContent: "center",
  },

  flexOneText: {
    fontSize: 24,
    fontWeight: "700",
  },
  flexThreeText: {
    fontSize: 24,
    fontWeight: "700",
  },

  balance: {
    fontSize: 14,
    fontWeight: "500",
  },
  buttonRow: {
    flexDirection: "row",
  },

  swapBox: {
    borderTopWidth: 1,
    borderTopColor: colors.greyLight,
    marginVertical: "10%",
  },
  swapIconStyle: {
    position: "absolute",
    right: 30,
    top: -30,
    zIndex: 20,
    borderRadius: 50,
    backgroundColor: colors.bg,
    paddingHorizontal: 10,
  },
  percentageButton: {
    flex: 1,
  },

  overallBalance: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    color: colors.textLight,
  },
});
