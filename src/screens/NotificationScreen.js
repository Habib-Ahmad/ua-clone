import { SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import ScreenHeaderWithoutLogo from "../components/ScreenHeaderWithoutLogo";


const NotificationScreen = ({ navigation }) => {
  return (
    <SafeAreaView styles={styles.container}>
      <ScrollView>
        <ScreenHeaderWithoutLogo
            {...navigation}
            heading="Notification"
        />

        <View style={styles.wrapper}>
            <Text>Notifications here</Text>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        alignItems: "center"
    }
});
