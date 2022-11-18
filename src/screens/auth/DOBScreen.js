import { useState } from "react";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Calendar from "../../assets/Calendar";
import Button from "../../components/input/Button";
import Input from "../../components/input/Input";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";

const DOBScreen = ({ navigation }) => {
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
    if (Platform.OS === "android") {
      setShow(true);
      // for iOS, add a button that closes the picker
    }
  };

  const handlePress = () => {
    navigation.navigate("CreatePINScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView style={styles.scrollView}>
          <ScreenHeaderWithLogo
            {...navigation}
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
