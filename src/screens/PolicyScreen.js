import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import ScreenHeader from "../components/ScreenHeader";

const PolicyScreen = ({ navigation }) => {
  return (
    <SafeAreaView styles={styles.container}>
      <ScrollView>
        <ScreenHeader {...navigation} heading="Privacy Policy" />

        <View style={styles.wrapper}>
          <Text style={styles.heading}>1. Types of data we collect</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, bibendum tortor ut nunc,
            ullamcorper pellentesque egestas tortor. Tempor ac aliquet at lorem ac sed nisi. Aenean
            enim mi gravida ultrices. Viverra potenti odio magna gravida risus consectet Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Eu, bibendum tortor ut nunc, ullamcorper
            pellentesque egestas tortor. Tempor ac aliquet at lorem ac sed nisi. Aenean enim mi
            gravida ultrices. Viverra potenti odio magna gravida risus consectetur.ur.
          </Text>

          <Text style={styles.heading}>2. Use of your Personal Data</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, bibendum tortor ut nunc,
            ullamcorper pellentesque egestas tortor. Tempor ac aliquet at lorem ac sed nisi. Aenean
            enim mi gravida ultrices. Viverra potenti odio magna gravida risus consectet Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Eu, bibendum tortor ut nunc, ullamcorper
            pellentesque egestas tortor. Tempor ac aliquet at lorem ac sed nisi. Aenean enim mi
            gravida ultrices. Viverra potenti odio magna gravida risus consectetur.ur.
          </Text>

          <Text style={styles.heading}>3. Disclosure of your Personal Data</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, bibendum tortor ut nunc,
            ullamcorper pellentesque egestas tortor. Tempor ac aliquet at lorem ac sed nisi. Aenean
            enim mi gravida ultrices. Viverra potenti odio magna gravida risus consectet Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Eu, bibendum tortor ut nunc, ullamcorper
            pellentesque egestas tortor. Tempor ac aliquet at lorem ac sed nisi. Aenean enim mi
            gravida ultrices. Viverra potenti odio magna gravida risus consectetur.ur.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PolicyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: "5%",
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: "4%",
  },
  paragraph: {
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 18,
  },
});
