import { SafeAreaView, ScrollView, StyleSheet} from "react-native";
import ScreenHeaderWithoutLogo from "../components/ScreenHeaderWithoutLogo";

const ContactScreen = ({ navigation }) => {
  return (
    <SafeAreaView styles={styles.container}>
      <ScrollView>
        <ScreenHeaderWithoutLogo
            {...navigation}
            heading="Contacts"
        />
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // wrapper: {
    //     alignItems: "center"
    // }
});
