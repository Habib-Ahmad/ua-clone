import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as SecureStore from "expo-secure-store";
import { v4 as uuidv4 } from "uuid";
import axios from "../../api/axios";
import urls from "../../api/urls";
import Calendar from "../../assets/Calendar";
import Button from "../../components/input/Button";
import Input from "../../components/input/Input";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";
import actions from "../../context/actions";
import { useGlobalContext } from "../../context/context";
import { getPushNotificationToken } from "../../functions";
import "react-native-get-random-values";

const DOBScreen = ({ navigation }) => {
  const {
    state: { registeringUser },
    dispatch,
  } = useGlobalContext();

  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState();
  const [show, setShow] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const date = new Date(selectedDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    setShow(false);
    setFormattedDate(`${day}/${month}/${year}`);
    setDate(selectedDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const getAppId = async () => {
    const uuid = uuidv4();
    await SecureStore.setItemAsync("secure_deviceid", JSON.stringify(uuid));
    const fetchUUID = await SecureStore.getItemAsync("secure_deviceid");
    return fetchUUID;
  };

  const handlePress = async () => {
    const appId = await getAppId();
    const token = await getPushNotificationToken();

    registeringUser.appId = appId;
    registeringUser.deviceToken = token;
    registeringUser.dateOfBirth = String(date);

    await axios.post(urls.auth.details, { ...registeringUser }).then(() => {
      dispatch({ type: actions.registeringUser.clear });
      navigation.navigate("CreatePINScreen");
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          <ScreenHeaderWithLogo
            heading="Date of birth"
            paragraph="Please provide your date of birth"
          />

          <View style={styles.inputWrapper}>
            <Input
              label="Date of birth"
              value={formattedDate}
              icon={<Calendar />}
              onIconPress={showDatepicker}
            />
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                is24Hour={true}
                onChange={onDateChange}
              />
            )}
          </View>
        </ScrollView>
      </View>

      <Button title="Continue" onPress={handlePress} disabled={!formattedDate} />
    </View>
  );
};

export default DOBScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  content: {
    flex: 1,
  },
  inputWrapper: {
    paddingHorizontal: 20,
  },
});
