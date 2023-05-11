import { Alert, Platform } from "react-native";
import { API_KEY, CLOUDINARY_SECRET } from "@env";
import * as Clipboard from "expo-clipboard";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import sha1 from "js-sha1";
import axios from "../api/axios";
import urls from "../api/urls";
import actions from "../context/actions";
import { store } from "../utils";

export const getUserData = async (dispatch) => {
  await axios.get(urls.auth.baseUrl).then((res) => {
    dispatch({ type: actions.setUser, payload: res.data.data });
  });
};

export const getFiatData = async (dispatch) => {
  await Promise.all([
    axios.get(urls.fiat.worth),
    axios.get(urls.fiat.baseUrl),
    axios.get(`${urls.trades.getActiveTrades}?pageNumber=1&pageSize=10`),
  ]).then(([res1, res2, res3]) => {
    dispatch({ type: actions.setFiatWorth, payload: res1.data.data });
    dispatch({ type: actions.setFiatWallets, payload: res2.data.data });
    dispatch({ type: actions.setActiveTrades, payload: res3.data.data });
  });
};

export const logout = async (dispatch) => {
  const refreshToken = await store.getRefreshToken();
  dispatch({ type: actions.logout });
  await store.removeRefreshExpiry();
  await store.removeRefreshToken();
  await axios.post(urls.auth.logout, { refreshToken });
};

export const getCurrencies = async () => {
  const result = await axios.get(urls.system.currencies);

  return result.data.data;
};

export const getUserBanks = async (dispatch) => {
  await axios.get(urls.trades.getPaymentMethods).then((res) => {
    dispatch({ type: actions.setBanks, payload: res.data.data });
  });
};

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
