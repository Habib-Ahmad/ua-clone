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
import IconTextRow from "../../components/IconTextRow";
import ProfileHeader from "../../components/ProfileHeader";
import actions from "../../context/actions";
import { useGlobalContext } from "../../context/context";
import { colors } from "../../utils/colors";
import store from "../../utils/store";

const data = [
  {
    name: "Personal Info",
    to: "PersonalInfoScreen",
    icon: <CombinedShape />,
  },
  {
    name: "Contact",
    to: "ContactScreen",
    icon: <Contact />,
  },
  {
    name: "Bank and Cards",
    to: "ManageBanksScreen",
    icon: <Card />,
  },
  {
    name: "Notification",
    to: "NotificationScreen",
    icon: <Notify />,
  },
  {
    name: "Colour Settings",
    to: "ColorSettingScreen",
    icon: <Color />,
  },
  {
    name: "Become a Merchant",
    to: "BecomeAMerchantScreen",
    icon: <Security color={colors.white} />,
  },
  {
    name: "KYC Verification",
    to: "KYCScreen",
    icon: <Security />,
  },
  {
    name: "Change Pin",
    to: "",
    icon: <Security />,
  },
  {
    name: "Report",
    to: "ReportScreen",
    icon: <Security />,
  },
  {
    name: "Privacy Policy",
    to: "PolicyScreen",
    icon: <Security />,
  },
  {
    name: "Invite Friends",
    to: "",
    icon: <Invite />,
  },
];

const ProfileScreen = ({ navigation }) => {
  const { dispatch } = useGlobalContext();

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
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>Profile</Text>
        </View>

        <ProfileHeader heading="Savannah Nguyen" paragraph="SavannahNguyen180" />

        {data.map((item) => (
          <IconTextRow
            key={item.name}
            leftIcon={item.icon}
            text={item.name}
            BAM={item.name === "Become a Merchant"}
            onPress={() => navigation.navigate(item.to)}
          />
        ))}

        <View style={styles.line} />

        <View style={styles.versionText}>
          <Text>Version 1.0</Text>
        </View>

        <IconTextRow leftIcon={<Logout />} text={"Logout"} onPress={logout} noArrow />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    paddingTop: 60,
  },
  headingWrapper: {
    alignItems: "center",
    marginBottom: 10,
  },
  heading: {
    fontWeight: "600",
    fontSize: 18,
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
