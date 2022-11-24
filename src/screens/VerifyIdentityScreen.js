import { SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import ScreenHeaderWithoutLogo from "../components/ScreenHeaderWithoutLogo";


const VerifyIdentityScreen = ({ navigation }) => {
  return (
    <SafeAreaView styles={styles.container}>
      <ScrollView>
        <ScreenHeaderWithoutLogo
            {...navigation}
            heading="Verify Identity"
        />

        <View style={styles.wrapper}>
            <Text>Welcome heres</Text>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerifyIdentityScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        alignItems: "center"
    }
});
