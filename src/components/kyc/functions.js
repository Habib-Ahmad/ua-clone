import { Alert } from "react-native";
import { API_KEY, CLOUDINARY_SECRET } from "@env";
import sha1 from "js-sha1";
import axios from "../../api/axios";
import urls from "../../api/urls";

export const uploadImageToCloudinary = async (imageData, userId) => {
  const apiUrl = "https://api.cloudinary.com/v1_1/dxp3qac0p/image/upload";
  const base64Img = `data:image/jpg;base64,${imageData}`;
  const timestamp = Math.floor(Date.now() / 1000);
  const folderPath = `kyc_photos/${userId}`;
  const paramsToSign = `folder=${folderPath}&timestamp=${timestamp}&upload_preset=hfvmvu2h${CLOUDINARY_SECRET}`;
  const signature = sha1(paramsToSign);
  const data = {
    api_key: API_KEY,
    file: base64Img,
    upload_preset: "hfvmvu2h",
    folder: folderPath,
    timestamp: timestamp,
    signature: signature,
  };
  return fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());
};

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

  Promise.all([
    uploadImageToCloudinary(base64.photo, userId),
    uploadImageToCloudinary(base64.documentFront, userId),
    uploadImageToCloudinary(base64.documentBack, userId),
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
