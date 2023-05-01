import { Alert } from "react-native";
import axios from "../../../api/axios";
import urls from "../../../api/urls";
import { uploadImageToCloudinary } from "../../../functions";

export const uploadImages = async (
  base64,
  formState,
  setFormState,
  setLoading,
  setStep,
  userId
) => {
  const isValid = validateBase64(base64);
  if (!isValid[0]) {
    Alert.alert("Fields missing", isValid[1]);
    return;
  }
  setLoading(true);

  const folderPath = `kyc_photos/${userId}`;

  Promise.all([
    uploadImageToCloudinary(base64.photo, folderPath),
    uploadImageToCloudinary(base64.documentFront, folderPath),
    uploadImageToCloudinary(base64.documentBack, folderPath),
  ])
    .then((results) => {
      setLoading(false);
      const allSecureUrls = results.map((result) => result.secure_url);
      if (allSecureUrls.length > 0) {
        setFormState((prev) => ({
          ...prev,
          photo: allSecureUrls[0],
          documentFront: allSecureUrls[1],
          documentBack: allSecureUrls[2],
        }));
      }
    })
    .then(() => {
      handleKYC(setStep, formState);
    })
    .catch((err) => {
      setLoading(false);
      Alert.alert("Cannot upload, something went wrong", err);
    });
};

export const handleKYC = async (setStep, formState) => {
  await axios.post(urls.kyc.baseUrl, formState).then(() => {
    setStep(3);
  });
};

export const validateBase64 = (base64) => {
  if (!base64.photo) {
    return [false, "Please upload a selfie"];
  }

  if (!base64.documentFront) {
    return [false, "Please provide a clear image of the back of the document"];
  }

  return [true, ""];
};
