import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "../../api/axios";
import urls from "../../api/urls";
import Autocomplete from "../../components/input/Autocomplete";
import Button from "../../components/input/Button";
import Input from "../../components/input/Input";
import Loader from "../../components/Loader";
import ScreenHeader from "../../components/ScreenHeader";
import { useGlobalContext } from "../../context/context";
import { getUserBanks } from "../../functions";

const AddBankScreen = ({ navigation }) => {
  const { state, dispatch } = useGlobalContext();

  const [banks, setBanks] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [bankName, setBankName] = useState("");
  const [bankCode, setBankCode] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  useEffect(() => {
    const getBanks = async () => {
      await axios.get(urls.monnify.banks).then((res) => {
        setBanks(res.data);
        setSearchResults(res.data);
      });
    };

    getBanks();
  }, []);

  useEffect(() => {
    const searchBanks = () => {
      if (!searchText || bankName === searchText) {
        setSearchResults([]);
        return;
      }

      const filteredBanks = banks?.filter((bank) =>
        bank.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchResults(filteredBanks);
    };

    searchBanks();
  }, [bankName, banks, searchText]);

  useEffect(() => {
    const getAccountName = async () => {
      if (accountNumber.length !== 10 || !bankCode) return;

      await axios
        .get(`${urls.monnify.verifyBank}?accountNumber=${accountNumber}&bankCode=${bankCode}`)
        .then((res) => {
          setAccountName(res.data.data.accountName);
        });
    };

    getAccountName();
  }, [accountNumber, bankCode]);

  const setBankDetails = (item) => {
    setBankName(item.name);
    setBankCode(item.code);
    setSearchText(item.name);
    setSearchResults([]);
  };

  const addBank = async () => {
    await axios
      .post(urls.trades.addBank, {
        bankName,
        bankCode,
        accountName,
        accountNumber,
      })
      .then(async () => {
        await getUserBanks(dispatch);
        navigation.goBack();
      });
  };

  return (
    <View style={styles.container}>
      <Loader loading={state.loading} />

      <ScreenHeader heading="Add Bank" />

      <View style={styles.wrapper}>
        <View style={styles.inputContainer}>
          <Autocomplete
            label="Bank Name"
            data={searchResults}
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            keyExtractor={(item) => item.code}
            renderItem={(props) => <RenderItem {...props} onPress={setBankDetails} />}
          />

          <View style={styles.space} />

          <Input label="AccountNumber" value={accountNumber} onChangeText={setAccountNumber} />

          <View style={styles.space} />

          <Input label="Account Name" value={accountName} editable={false} />

          <View style={styles.space} />

          <Button title="Add" onPress={addBank} />
        </View>
      </View>
    </View>
  );
};

export default AddBankScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    marginTop: 20,
  },
  inputContainer: {
    paddingHorizontal: "5%",
  },
  space: {
    height: 40,
    width: 40,
  },
  item: {
    marginBottom: 15,
  },
  itemText: {
    fontSize: 16,
    textTransform: "capitalize",
  },
});

const RenderItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.item} activeOpacity={0.7} onPress={() => onPress(item)}>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );
};
