import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import CustomCamera from "../../../components/CustomCamera";
import Button from "../../../components/input/Button";
import ScreenHeader from "../../../components/ScreenHeader";
import { colors } from "../../../utils";
import { DocumentType, KYCSuccess, UploadImages } from "./components";
import { uploadImages } from "./functions";

const KYCScreen = ({ navigation }) => {
  const [cameraOn, setCameraOn] = useState(false);
  const [step, setStep] = useState(1);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [base64, setBase64] = useState({
    photo: "",
    documentFront: "",
    documentBack: "",
  });
  const [formState, setFormState] = useState({
    identityType: 0,
    photo: "",
    documentFront: "",
    documentBack: "",
  });

  const handlePress = async () => {
    if (step === 1) setStep(2);

    if (step === 2) uploadImages(base64, formState, setFormState, setLoading, setStep, "userID");

    if (step === 3) navigation.navigate("ProfileScreen");
  };

  if (cameraOn) {
    return (
      <View style={styles.cameraContainer}>
        <StatusBar style="light" backgroundColor={colors.black} />
        <CustomCamera {...{ setCameraOn, setBase64, id }} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScreenHeader heading="KYC Verification" />

      <View style={styles.wrapper}>
        {step === 1 ? (
          <DocumentType {...{ formState, setFormState }} />
        ) : step === 3 ? (
          <KYCSuccess />
        ) : (
          <UploadImages {...{ base64, setBase64, setCameraOn, setId }} />
        )}
      </View>

      <Button
        title={step === 3 ? "Ok, thanks" : "Continue"}
        onPress={handlePress}
        loading={loading}
      />
    </View>
  );
};

export default KYCScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 0.98,
    paddingHorizontal: 30,
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
