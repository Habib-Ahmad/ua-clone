import { ScrollView, StyleSheet, Text, View } from "react-native";
import axios from "../../api/axios";
import urls from "../../api/urls";
import Card from "../../assets/Card";
import Color from "../../assets/Color";
import CombinedShape from "../../assets/CombinedShape";
import Contact from "../../assets/Contact";
import Invite from "../../assets/Invite";
import Logout from "../../assets/Logout";
import Notify from "../../assets/Notify";
import Security from "../../assets/Security";
import Stroke from "../../assets/Stroke";
import IconTextRow from "../../components/IconTextRow";
import ProfileHeader from "../../components/ProfileHeader";
import ScreenHeader from "../../components/ScreenHeader";
import actions from "../../context/actions";
import { useGlobalContext } from "../../context/context";
import { colors } from "../../utils/colors";
import store from "../../utils/store";

const ProfileScreen = ({ navigation }) => {
  const { dispatch } = useGlobalContext();

  const handlePersonalInfo = () => {
    navigation.navigate("PersonalInfoScreen");
  };

  const handleContact = () => {
    navigation.navigate("ContactScreen");
  };

  const handleNotification = () => {
    navigation.navigate("NotificationScreen");
  };

  const handleColor = () => {
    navigation.navigate("ColorSettingScreen");
  };

  const handlePolicy = () => {
    navigation.navigate("PolicyScreen");
  };

  const handleBanks = () => {
    navigation.navigate("ManageBanksScreen");
  };

  const handleReport = () => {
    navigation.navigate("ReportScreen");
  };

  const logout = async () => {
    const refreshToken = await store.getRefreshToken();
    dispatch({ type: actions.logout });
    await store.removeRefreshExpiry();
    await store.removeRefreshToken();
    await axios.post(urls.auth.logout, { refreshToken });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ScreenHeader heading="Profile" />

        <ProfileHeader heading="Savannah Nguyen" paragraph="SavannahNguyen180" />

        <IconTextRow
          leftIcon={<CombinedShape/>}
          textLeft={"Personal Info"}
          rightIcon={<Stroke color={colors.black}/>}
          onPress={handlePersonalInfo}
        />

        <IconTextRow
          leftIcon={<Contact/>}
          textLeft={"Contact"}
          rightIcon={<Stroke color={colors.black}/>}
          onPress={handleContact}
        />

        <IconTextRow
          leftIcon={<Card/>}
          textLeft={"Bank and Cards"}
          rightIcon={<Stroke color={colors.black}/>}
          onPress={handleBanks}
        />

        <IconTextRow
          leftIcon={<Notify/>}
          textLeft={"Notification"}
          rightIcon={<Stroke color={colors.black}/>}
          onPress={handleNotification}
        />

        <IconTextRow
          leftIcon={<Color/>}
          textLeft={"Colour Settings"}
          rightIcon={<Stroke color={colors.black}/>}
          onPress={handleColor}
        />

        <IconTextRow
          leftIcon={<Security color={colors.white}/>}
          textLeft={"Become a Merchant"}
          color={colors.white}
          rightIcon={<Stroke color={colors.white}/>}
          backgroundColor={colors.primary}
        />

        <IconTextRow
          leftIcon={<Security color={colors.black}/>}
          textLeft={"Change Pin"}
          rightIcon={<Stroke color={colors.black}/>}
        />

        <IconTextRow
          leftIcon={<Security color={colors.black}/>}
          textLeft={"Report"}
          rightIcon={<Stroke color={colors.black}/>}
          onPress={handleReport}
        />

        <IconTextRow
          leftIcon={<Security color={colors.black}/>}
          textLeft={"Privacy Policy"}
          rightIcon={<Stroke color={colors.black}/>}
          onPress={handlePolicy}
        />

        <IconTextRow
          leftIcon={<Invite/>}
          textLeft={"Invite Friends"}
          rightIcon={<Stroke color={colors.black}/>}
          // onPress={handleVerification}
        />

        <View style={styles.line} />

        <View style={styles.versionText}>
          <Text>Version 1.0</Text>
        </View>

        <IconTextRow
          leftIcon={<Logout/>}
          textLeft={"Logout"}
          rightIcon={<Stroke color={colors.black}/>}
          onPress={logout}
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
  line: {
    flex: 1,
    height: 1,
    marginTop: 10,
    backgroundColor: colors.greyDark,
  },
  versionText: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});
