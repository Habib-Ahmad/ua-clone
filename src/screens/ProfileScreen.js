import { ScrollView, StyleSheet, View } from "react-native";
import ProfileHeader from "../components/ProfileHeader";
import ScreenHeaderWithoutLogo from "../components/ScreenHeaderWithoutLogo";

const ProfileScreen = ({ navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ScreenHeaderWithoutLogo
          {...navigation}
          heading="Profile"
        />

        <ProfileHeader
          heading="Savannah Nguyen"
          paragraph="SavannahNguyen180"
        />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
});
