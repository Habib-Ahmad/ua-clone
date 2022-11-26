import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import ScreenHeaderWithoutLogo from "../components/ScreenHeaderWithoutLogo";

const ColorSettingScreen = ({ navigation }) => {
  return (
    <SafeAreaView styles={styles.container}>
      <ScrollView>
        <ScreenHeaderWithoutLogo {...navigation} heading="Colour Settings" />

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
