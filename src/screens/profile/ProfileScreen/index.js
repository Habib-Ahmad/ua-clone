import { ScrollView, StyleSheet, Text, View } from "react-native";
import Logout from "../../../assets/Logout";
import ScreenHeader from "../../../components/ScreenHeader";
import { useGlobalContext } from "../../../context/context";
import { logout } from "../../../functions";
import { colors } from "../../../utils";
import IconTextRow from "./components/IconTextRow";
import ProfileHeader from "./components/ProfileHeader";
import { data } from "./data";

const ProfileScreen = ({ navigation }) => {
  const { state, dispatch } = useGlobalContext();

  const { firstName, lastName, tag, photo } = state.user;

  return (
    <View style={styles.container}>
      <ScrollView>
        <ScreenHeader heading="Profile" noBackButton />

        <ProfileHeader heading={`${firstName} ${lastName}`} tag={tag} image={photo} />

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

        <View style={styles.version}>
          <Text style={styles.versionText}>Version 1.0</Text>
        </View>

        <IconTextRow leftIcon={<Logout />} text="Logout" onPress={() => logout(dispatch)} noArrow />
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
    marginBottom: 20,
    backgroundColor: colors.greyDark,
  },
  version: {
    alignItems: "center",
    marginBottom: 20,
  },
  versionText: {
    color: colors.textLight,
    textAlign: "center",
  },
});
