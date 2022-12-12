import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import avatar from "../../assets/avatar.jpg";
import Button from "../../components/input/Button";
import Input from "../../components/input/Input";
import ScreenHeader from "../../components/ScreenHeader";
import { colors } from "../../utils/colors";

export default function TransferDetailsScreen({ route }) {
  const { name, info } = route?.params || {};

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("EnterPinScreen");
  };

  return (
    <View style={styles.container}>
      <ScreenHeader heading="Transfer" />

      <View style={styles.wrapper}>
        <View style={styles.flexRow}>
          <View>
            <Image source={avatar} style={styles.imageStyle} />
          </View>
          <View style={styles.flexTwo}>
            <Text style={styles.name}>{name}</Text>
            <Text styles={styles.info}>{info}</Text>
          </View>
          <TouchableOpacity style={styles.flexThree}>
            <MaterialIcons name="edit" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.inputStyle}>
          <Input label={"Amount"} placeholder="Enter Amount" />
        </View>
      </View>

      <View style={styles.buttonStyle}>
        <Button title={"Continue"} onPress={handlePress} />
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
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  flexRow: {
    flexDirection: "row",
  },
  flexTwo: {
    justifyContent: "space-around",
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
  },
  info: {
    fontSize: 14,
    fontWeight: "500",
  },
  flexThree: {
    justifyContent: "center",
  },

  inputStyle: {
    marginTop: "15%",
  },
  buttonStyle: {
    position: "absolute",
    bottom: 20,
    right: 0,
    left: 0,
  },
});
