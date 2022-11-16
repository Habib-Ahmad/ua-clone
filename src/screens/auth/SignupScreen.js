import {
  ActivityIndicator,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../../components/input/Button";
import Input from "../../components/input/Input";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";
import { colors } from "../../utils/colors";

const SignupScreen = ({ navigation }) => {
  const handleSubmit = () => {
    navigation.navigate("GenderScreen");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ScreenHeaderWithLogo {...navigation} heading="Create account" />

        <Text style={styles.text}>This is the name we will use to address you</Text>

        <Formik
          initialValues={{ firstName: "", lastName: "", email: "" }}
          validationSchema={Yup.object().shape({
            // firstName: Yup.string().trim().required("This field cannot be empty"),
            // lastName: Yup.string().trim().required("This field cannot be empty"),
            // email: Yup.string()
            //   .trim()
            //   .required("This field cannot be empty")
            //   .email("This is not a valid email"),
          })}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting }) => (
            <View style={styles.wrapper}>
              <View style={styles.flex}>
                <View style={styles.input}>
                  <Input
                    label="First name"
                    onChangeText={handleChange("firstName")}
                    onBlur={handleBlur("firstName")}
                    value={values.firstName}
                  />
                  {touched.firstName && errors.firstName ? (
                    <Text style={styles.error}>{errors.firstName}</Text>
                  ) : null}
                </View>

                <View style={styles.input}>
                  <Input
                    label="Last name"
                    onChangeText={handleChange("lastName")}
                    onBlur={handleBlur("lastName")}
                    value={values.lastName}
                  />
                  {touched.lastName && errors.lastName ? (
                    <Text style={styles.error}>{errors.lastName}</Text>
                  ) : null}
                </View>

                <View style={styles.input}>
                  <Input
                    label="E-mail"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                  />
                  {touched.email && errors.email ? (
                    <Text style={styles.error}>{errors.email}</Text>
                  ) : null}
                </View>
              </View>

              <Button
                title={isSubmitting ? <ActivityIndicator /> : "Continue"}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    paddingBottom: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: colors.textLight,
    paddingHorizontal: "5%",
    lineHeight: 24,
    marginBottom: 50,
  },
  scrollView: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  flex: {
    flex: 1,
  },
  input: {
    marginBottom: 30,
  },
  error: {
    color: colors.red,
    marginLeft: 15,
  },
});
