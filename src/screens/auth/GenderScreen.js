import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Female from "../../assets/Female";
import Male from "../../assets/Male";
import Button from "../../components/input/Button";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";
import { colors } from "../../utils/colors";

const GenderScreen = ({ navigation }) => {
  const [gender, setGender] = useState();

  const handlePress = () => {
    navigation.navigate("DOBScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView style={styles.scrollView}>
          <ScreenHeaderWithLogo
            {...navigation}
            heading="Gender"
            paragraph="To give you a better experience we need to know your gender"
          />

          <View style={styles.genderWrapper}>
            <TouchableOpacity activeOpacity={1} onPress={() => setGender("male")}>
              <View
                style={[
                  styles.gender,
                  { backgroundColor: gender === "male" ? colors.primary : colors.greyLight },
                ]}
              >
                <Male />
                <Text style={styles.genderText}>Male</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.space} />

            <TouchableOpacity activeOpacity={1} onPress={() => setGender("female")}>
              <View
                style={[
                  styles.gender,
                  { backgroundColor: gender === "female" ? colors.primary : colors.greyLight },
                ]}
              >
                <Female />
                <Text style={styles.genderText}>Female</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <Button title="Continue" onPress={handlePress} disabled={!gender} />
    </View>
  );
};

export default GenderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  content: {
    flex: 1,
  },
  genderWrapper: {
    alignItems: "center",
  },
  gender: {
    borderRadius: 150,
    height: 150,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  genderText: {
    color: colors.white,
    marginTop: 10,
  },
  space: {
    width: 25,
    height: 25,
  },
});
