import AsyncStorage from "@react-native-async-storage/async-storage";

const tokenVariable = "refresh-token";
const expiryVariable = "refresh-expiry";

const setRefreshToken = (token) => AsyncStorage.setItem(tokenVariable, token);
const getRefreshToken = () => AsyncStorage.getItem(tokenVariable);
const removeRefreshToken = () => AsyncStorage.removeItem(tokenVariable);

const setRefreshExpiry = (date) => AsyncStorage.setItem(expiryVariable, date);
const getRefreshExpiry = () => AsyncStorage.getItem(expiryVariable);
const removeRefreshExpiry = () => AsyncStorage.removeItem(expiryVariable);

const store = {
  setRefreshToken,
  getRefreshToken,
  removeRefreshToken,
  setRefreshExpiry,
  getRefreshExpiry,
  removeRefreshExpiry,
};

export default store;
