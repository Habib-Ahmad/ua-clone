import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import ScreenHeader from "../../components/ScreenHeader";

const ColorSettingScreen = () => {
  return (
    <SafeAreaView styles={styles.container}>
      <ScrollView>
        <ScreenHeader heading="Colour Settings" />

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
