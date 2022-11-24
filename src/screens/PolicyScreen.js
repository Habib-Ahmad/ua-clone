import { SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import ScreenHeaderWithoutLogo from "../components/ScreenHeaderWithoutLogo";

const PolicyScreen = ({ navigation }) => {
  return (
    <SafeAreaView styles={styles.container}>
      <ScrollView>
        <ScreenHeaderWithoutLogo
            {...navigation}
            heading="Privacy Policy"
        />

        <View style={styles.wrapper}>
            <Text>Welcome here</Text>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default PolicyScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        alignItems: "center"
    }
});
