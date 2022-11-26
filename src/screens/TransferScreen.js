import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import ScreenHeaderWithoutLogo from "../components/ScreenHeaderWithoutLogo";

const TransferScreen = ({ navigation }) => {
  return (
    <SafeAreaView styles={styles.container}>
      <ScrollView>
        <ScreenHeaderWithoutLogo {...navigation} heading="Transfer" />

        <View style={styles.wrapper}>
          <Text>Welcome here</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    alignItems: "center",
  },
});
