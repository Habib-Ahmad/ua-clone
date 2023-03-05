import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/input/Button";
import Input from "../../components/input/Input";
import ScreenHeader from "../../components/ScreenHeader";
import { colors } from "../../utils/colors";

export default function ReportScreen() {
  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate("SuccessfulScreen", {
      type: "report",
    });
  };
  return (
    <View style={styles.container}>
      <ScreenHeader heading="Report" />

      <View style={styles.wrapper}>
          <Input
            label={"Enter your complaints here"}
            numberOfLines={5}
            placeholder={"I made a transaction and it failed to"}
            icon={<MaterialIcons name="edit" size={20} color={colors.primary} />}
          />
      </View>

      <View style={styles.buttonBox}>
        <Button title={"Submit report"} backgroundColor={colors.primary} onPress={handleContinue} />
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
    marginTop: "10%",
  },
  buttonBox: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
});
