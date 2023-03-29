import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import CustomCamera from "../../components/CustomCamera";
import Button from "../../components/input/Button";
import DocumentType from "../../components/kyc/DocumentType";
import KYCSuccess from "../../components/kyc/KYCSuccess";
import UploadImages from "../../components/kyc/UploadImages";
import ScreenHeader from "../../components/ScreenHeader";
import { colors } from "../../utils/colors";

const KYCScreen = ({ navigation }) => {
  const [cameraOn, setCameraOn] = useState(false);
  const [step, setStep] = useState(1);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    identityType: 0,
    photo: "",
    documentFront: "",
    documentBack: "",
  });

  const uploadImages = async () => {
    setLoading(true);
    const base64Img = `data:image/jpg;base64,${formState.photo}`;
    const apiUrl = "https://api.cloudinary.com/v1_1/dxp3qac0p/image/upload";
    const data = {
      file: base64Img,
      upload_preset: "h0ectl3r",
    };

    fetch(apiUrl, {
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    })
      .then(async (response) => {
        setLoading(false);
        const data = await response.json();
        if (data.secure_url) {
          setStep(3);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        Alert.alert("Cannot upload, something went wrong", err);
      });
  };

  const handlePress = async () => {
    if (step === 1) setStep(2);

    if (step === 2) uploadImages();

    if (step === 3) navigation.navigate("ProfileScreen");
  };

  if (cameraOn) {
    return (
      <View style={styles.cameraContainer}>
        <StatusBar style="light" backgroundColor={colors.black} />
        <CustomCamera {...{ setCameraOn, formState, setFormState, id }} />
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
          <UploadImages {...{ formState, setFormState, setCameraOn, setId }} />
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
