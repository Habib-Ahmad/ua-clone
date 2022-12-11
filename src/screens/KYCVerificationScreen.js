import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import IDCard from "../assets/IDCard";
import Button from "../components/input/Button";
import Input from "../components/input/Input";
import ScreenHeader from "../components/ScreenHeader";
import { colors } from "../utils/colors";

export default function KYCVerificationScreen() {
  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate("SuccessfulScreen", {
      type: "verification",
    });
  };
  return (
    <View style={styles.container}>
      <ScreenHeader {...navigation} heading="Verify Identity" />

      <View style={styles.idCardBox}>
        <IDCard backgroundColor={colors.primaryLight} />
      </View>
      <Text style={styles.heading}>KYC Verification</Text>
      <Text style={styles.paragraph}>Provide the following details</Text>

      <View style={styles.wrapper}>
        <View style={styles.inputBox}>
          <Input
            label={"BVN"}
            keyboardType={"numeric"}
            placeholder={"Enter BVN"}
            icon={<MaterialIcons name="edit" size={20} color={colors.primary} />}
          />
        </View>

        <TouchableOpacity activeOpacity={0.8}>
          <Input
            label={"Select Bank"}
            keyboardType={"numeric"}
            placeholder={"Select Bank"}
            editable={false}
            icon={<AntDesign name="down" size={15} color={colors.primary} />}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonBox}>
        <Button title={"Continue"} backgroundColor={colors.primary} onPress={handleContinue} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  idCardBox: {
    alignSelf: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginTop: "4%",
    marginBottom: "2%",
  },
  paragraph: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  wrapper: {
    paddingHorizontal: "5%",
    marginTop: "10%",
  },
  inputBox: {
    marginBottom: "10%",
  },
  buttonBox: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
});
