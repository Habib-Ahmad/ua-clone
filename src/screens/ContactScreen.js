import React from "react";
import { StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Input from "../components/input/Input";
import ScreenHeader from "../components/ScreenHeader";
import ContactTabs from "../stacks/ContactTabs";
import { colors } from "../utils/colors";

const ContactScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScreenHeader {...navigation} heading="Contacts" />

      <View style={styles.inputStyle}>
        <Input
          label="Search"
          placeholder="Search name, username, email"
          icon={<FontAwesome name="microphone" size={24} color={colors.primary} />}
        />
      </View>

      <ContactTabs />
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputStyle: {
    paddingHorizontal: "5%",
    marginVertical: "5%",
  },
});
