import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ProfileHeader from "../components/ProfileHeader";
import ScreenHeaderWithoutLogo from "../components/ScreenHeaderWithoutLogo";
import { colors } from "../utils/colors";

const ProfileScreen = ({ navigation }) => {
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

        <TouchableOpacity style={styles.card} onPress={handlePersonalInfo} activeOpacity={0.9}>
          <Icon name="account-outline" size={24} color={colors.black} />
          
          <Text style={styles.textName}>Personal Info</Text>

          <View style={styles.iconWrapper}>
            <AntDesign name="right" size={20} color={colors.black} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handleContact} activeOpacity={0.9}>
          <Icon name="account-multiple-outline" size={24} color={colors.black} />
          
          <Text style={styles.textName}>Contacts</Text>

          <View style={styles.iconWrapper}>
            <AntDesign name="right" size={20} color={colors.black} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.9}>
          <Icon name="credit-card-outline" size={24} color={colors.black} />
          
          <Text style={styles.textName}>Bank and Cards</Text>

          <View style={styles.iconWrapper}>
            <AntDesign name="right" size={20} color={colors.black} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handleNotification} activeOpacity={0.9}>
          <Icon name="bell-outline" size={24} color={colors.black} />
          
          <Text style={styles.textName}>Notification</Text>

          <View style={styles.iconWrapper}>
            <AntDesign name="right" size={20} color={colors.black} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handleColor} activeOpacity={0.9}>
          <Icon name="vector-triangle" size={24} color={colors.black} />
          
          <Text style={styles.textName}>Colour Settings</Text>

          <View style={styles.iconWrapper}>
            <AntDesign name="right" size={20} color={colors.black} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.9}>
          <Icon name="shield-check-outline" size={24} color={colors.black} />
          
          <Text style={styles.textName}>Change Pin</Text>

          <View style={styles.iconWrapper}>
            <AntDesign name="right" size={20} color={colors.black} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handlePolicy} activeOpacity={0.9}>
          <Icon name="shield-check-outline" size={24} color={colors.black} />
          
          <Text style={styles.textName}>Privacy Policy</Text>

          <View style={styles.iconWrapper}>
            <AntDesign name="right" size={20} color={colors.black} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.9}>
          <Icon name="account-group-outline" size={24} color={colors.black} />
          
          <Text style={styles.textName}>Invite Friends</Text>

          <View style={styles.iconWrapper}>
            <AntDesign name="right" size={20} color={colors.black} />
          </View>
        </TouchableOpacity>

        <View style={styles.line} />

        <View style={styles.versionText}>
          <Text>Version 1.0</Text>
        </View>

        <TouchableOpacity style={styles.card}>
          <Icon name="logout" size={24} color={colors.red} />
          
          <Text style={styles.textName}>Log Out</Text>
        </TouchableOpacity>
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
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  textName: {
    flex: 1,
    paddingLeft: 15,
    fontSize: 16,
  },
  iconWrapper: {
    width: 30,
  },
  line: {
    flex: 1, 
    height: 1,
    marginTop: 10, 
    backgroundColor: colors.greyLight
  },
  versionText: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  }
});
