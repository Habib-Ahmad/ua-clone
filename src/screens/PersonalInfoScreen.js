import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import moment from "moment";
import Button from "../components/input/Button";
import Input from "../components/input/Input";
import ScreenHeaderWithoutLogo from "../components/ScreenHeaderWithoutLogo";
import UploadImage from "../components/UploadImage";
import { colors } from "../utils/colors";

const ProfileInfoScreen = ({ navigation }) => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    var date = moment().format("DD MMM YYYY hh:mmA");
    setCurrentDate(date);
  }, []);

  const [username, setUsername] = useState("");
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [gender, setGender] = useState("");

  const filledAllFields = username && fullname && email && phone && address && dateBirth && gender;

  const handlePress = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <SafeAreaView styles={styles.container}>
      <ScrollView>
        <ScreenHeaderWithoutLogo {...navigation} heading="Personal Information" />

        <View style={styles.editImageWrapper}>
          <UploadImage />
        </View>

        <View style={styles.wrapper}>
          <Input
            label="Username"
            placeholder="Ultron"
            onChangeText={setUsername}
            value={username}
            icon={<MaterialIcons name="edit" size={20} color={colors.primary} />}
          />

          <View style={styles.space} />

          <Input
            label="Full name"
            placeholder="Savannah Nguyen"
            onChangeText={setFullName}
            value={fullname}
          />

          <View style={styles.space} />

          <Input
            label="Email"
            placeholder="shereefadamu001@gmail.com"
            onChangeText={setEmail}
            value={email}
          />

          <View style={styles.space} />

          <Input
            label="Phone"
            placeholder="+2349031754067"
            onChangeText={setPhone}
            value={phone}
            keyboardType="numeric"
          />

          <View style={styles.space} />

          <Input
            label="Address"
            placeholder="406 Oladipo diya street, Abuja.."
            onChangeText={setAddress}
            value={address}
            icon={<MaterialIcons name="edit" size={20} color={colors.primary} />}
          />

          <View style={styles.space} />

          <Input
            label="Date of Birth"
            placeholder="07/01/1995"
            onChangeText={setDateBirth}
            value={dateBirth}
            icon={<MaterialIcons name="edit" size={20} color={colors.primary} />}
          />

          <View style={styles.space} />

          <Input label="Gender" placeholder="Male" onChangeText={setGender} value={gender} />
        </View>

        <View style={styles.dateWrapper}>
          <Text>{currentDate}</Text>
        </View>

        <Button title="Submit" onPress={handlePress} disabled={!filledAllFields} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  space: {
    width: 30,
    height: 30,
  },
  dateWrapper: {
    alignItems: "center",
    paddingTop: 20,
  },
  editImageWrapper: {
    alignItems: "center",
    paddingBottom: 20,
  },
});
