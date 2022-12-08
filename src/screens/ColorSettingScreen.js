import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import ScreenHeader from "../components/ScreenHeader";

const ColorSettingScreen = ({ navigation }) => {
  return (
    <SafeAreaView styles={styles.container}>
      <ScrollView>
        <ScreenHeader {...navigation} heading="Colour Settings" />

        <View style={styles.wrapper}>
          <Text>Welcome here</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ColorSettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    alignItems: "center",
  },
});
