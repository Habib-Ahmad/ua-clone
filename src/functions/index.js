import { Alert, Platform } from "react-native";
import { API_KEY, CLOUDINARY_SECRET } from "@env";
import * as Clipboard from "expo-clipboard";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import sha1 from "js-sha1";

export const getPushNotificationToken = async () => {
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      Alert.alert("Failed to get push token for push notification!");
      return;
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    return token;
  } else {
    Alert.alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }
};

export const copyToClipboard = async (text) => {
  await Clipboard.setStringAsync(String(text));
};

export const uploadImageToCloudinary = async (imageData, folderPath) => {
  const apiUrl = "https://api.cloudinary.com/v1_1/dxp3qac0p/image/upload";
  const base64Img = `data:image/jpg;base64,${imageData}`;
  const timestamp = Math.floor(Date.now() / 1000);
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
