import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/colors";

var width = Dimensions.get("window").width;

const ProfileHeader = ({ heading, paragraph }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View>
            <Image
                style={styles.imgSize} 
                source={require("../assets/avatar.jpg")}
            />
        </View>

        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>{heading}</Text>
          {paragraph && <Text style={styles.paragraph}>{paragraph}</Text>}
        </View>
      </View>

      <View style={styles.line} />
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "5%",
    marginBottom: 15,
  },
  headingWrapper: {
    top: 20,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "600",
    fontSize: width * 0.045,
  },
  paragraph: {
    textAlign: "center",
    fontSize: width * 0.038,
    color: colors.textLight,
    paddingHorizontal: "10%",
    lineHeight: 24,
    marginBottom: 40,
  },
  imgSize: {
    width: 90, 
    height: 90,
    borderRadius:999,
  },
  line: {
    flex: 1, 
    height: 1, 
    backgroundColor: colors.greyLight
  }
});
