import { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import axios from "../../api/axios";
import urls from "../../api/urls";
import AvatarBlueBig from "../../assets/AvatarBlueBig";
import Button from "../../components/input/Button";
import Input from "../../components/input/Input";
import Loader from "../../components/Loader";
import ScreenHeader from "../../components/ScreenHeader";
import { useGlobalContext } from "../../context/context";
import { getUserData } from "../../functions";

const ProfileInfoScreen = ({ navigation }) => {
  const { state, dispatch } = useGlobalContext();
  const { firstName, lastName, email, phoneNumber, role, country, photo, tag } = state.user;

  const [loading, setLoading] = useState(false);
  const [userTag, setUserTag] = useState();

  useEffect(() => {
    setUserTag(tag);
  }, [tag]);

  const verifyAndUpdateTag = async () => {
    setLoading(true);
    await axios
      .get(`${urls.auth.verifyTag}?tag=${userTag}`)
      .then(async () => {
        await axios
          .post(urls.auth.updateTag, {
            tag: userTag,
          })
          .then(async () => {
            await getUserData(dispatch);
          })
          .then(() => {
            setLoading(false);
            navigation.goBack();
          });
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <SafeAreaView styles={styles.container}>
      <Loader loading={loading} />

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
          <Input label="First name" value={firstName} editable={false} />

          <View style={styles.space} />

          <Input label="Last name" value={lastName} editable={false} />

          <View style={styles.space} />

          <Input label="E-mail" value={email} editable={false} />

          <View style={styles.space} />

          <Input label="Phone" value={phoneNumber} editable={false} keyboardType="numeric" />

          <View style={styles.space} />

          <Input label="Role" value={role} editable={false} />

          <View style={styles.space} />

          <Input label="Country" value={country} editable={false} />

          <View style={styles.space} />

          <Input label="Tag" value={userTag} onChangeText={setUserTag} />

          <View style={styles.space} />

          <Button title="Update Tag" onPress={verifyAndUpdateTag} />
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
