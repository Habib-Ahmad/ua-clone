import { Image, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import AvatarBlueBig from "../../assets/AvatarBlueBig";
import Input from "../../components/input/Input";
import ScreenHeader from "../../components/ScreenHeader";
import { useGlobalContext } from "../../context/context";

const ProfileInfoScreen = () => {
  const { state } = useGlobalContext();
  const { firstName, lastName, email, phoneNumber, role, country, photo } = state.user;

  return (
    <SafeAreaView styles={styles.container}>
      <ScrollView>
        <ScreenHeader heading="Personal Information" />

        {photo ? (
          <Image
            style={styles.image}
            source={{
              uri: photo,
            }}
          />
        ) : (
          <View style={styles.avatar}>
            <AvatarBlueBig />
          </View>
        )}

        <View style={styles.wrapper}>
          <Input label="First name" value={firstName} disabled />

          <View style={styles.space} />

          <Input label="Last name" value={lastName} disabled />

          <View style={styles.space} />

          <Input label="E-mail" value={email} disabled />

          <View style={styles.space} />

          <Input label="Phone" value={phoneNumber} disabled keyboardType="numeric" />

          <View style={styles.space} />

          <Input label="Role" value={role} disabled />

          <View style={styles.space} />

          <Input label="Country" value={country} disabled />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 140,
    width: 140,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 60,
    borderRadius: 120,
    resizeMode: "contain",
  },
  avatar: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 60,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  space: {
    width: 30,
    height: 30,
  },
});
