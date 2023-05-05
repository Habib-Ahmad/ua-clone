import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AvatarBlueBig from "../../../../assets/AvatarBlueBig";
import { copyToClipboard } from "../../../../functions";
import { colors } from "../../../../utils";

const ProfileHeader = ({ heading, tag, image }) => {
  return (
    <View style={styles.container}>
      {image ? (
        <Image style={styles.img} source={{ uri: image }} />
      ) : (
        <View style={styles.avatar}>
          <AvatarBlueBig />
        </View>
      )}

      <View style={styles.headingWrapper}>
        <Text style={styles.heading}>{heading}</Text>
        <TouchableOpacity activeOpacity={0.7} onPress={() => copyToClipboard(tag)}>
          <Text style={styles.tag}>Tag: {tag}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "6%",
    marginHorizontal: "2%",
    marginBottom: 15,
    paddingBottom: 30,
    borderBottomColor: colors.greyDark,
    borderBottomWidth: 1,
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 90,
    marginRight: 20,
  },
  avatar: {
    marginRight: 20,
  },
  headingWrapper: {
    justifyContent: "center",
  },
  heading: {
    fontWeight: "600",
    fontSize: 16,
  },
  tag: {
    color: colors.textLight,
  },
});
