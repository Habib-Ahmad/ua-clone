import { useCallback, useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "../../api/axios";
import urls from "../../api/urls";
import BuildingSmall from "../../assets/BuildingSmall";
import Close from "../../assets/Close";
import CustomModal from "../../components/input/CustomModal";
import Loader from "../../components/Loader";
import ScreenHeader from "../../components/ScreenHeader";
import actions from "../../context/actions";
import { useGlobalContext } from "../../context/context";
import { colors } from "../../utils";

const BanksScreen = ({ navigation }) => {
  const { state, dispatch } = useGlobalContext();
  const { banks } = state;

  const [bankId, setBankId] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (!banks.length) {
      getBanks();
    }
  }, [getBanks, banks]);

  const getBanks = useCallback(async () => {
    await axios.get(urls.trades.getBanks).then((res) => {
      dispatch({ type: actions.setBanks, payload: res.data.data });
    });
  }, [dispatch]);

  const removeBank = async () => {
    await axios.delete(`${urls.trades.removeBank}/${bankId}`).then(() => {
      setModalVisible(false);
      getBanks();
    });
  };

  const handleClose = () => {
    setModalVisible(false);
    setBankId("");
  };

  const handlePress = (id) => {
    setBankId(id);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Loader loading={state.loading} />
      <ScreenHeader heading="Banks" />

      <ScrollView>
        <View style={styles.banksContainer}>
          {!banks.length ? (
            <Text style={styles.noBanks}>You have not added any banks</Text>
          ) : (
            banks.map((bank) => (
              <View key={bank?.id} style={styles.bank}>
                <BuildingSmall />

                <View style={styles.textContainer}>
                  <Text style={styles.bankName}>{bank?.bankName}</Text>
                  <View style={styles.space} />
                  <Text style={styles.accountNumber}>{bank?.accountNumber}</Text>
                </View>

                <TouchableOpacity style={styles.close} onPress={() => handlePress(bank?.id)}>
                  <Close />
                </TouchableOpacity>
              </View>
            ))
          )}
        </View>
      </ScrollView>

      <View style={styles.add}>
        <TouchableOpacity
          style={styles.addBtn}
          activeOpacity={0.6}
          onPress={() => navigation.navigate("AddBankScreen")}
        >
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
        <Text style={styles.addTxt}>Add bank</Text>
      </View>

      <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>Are you sure you want to remove this bank?</Text>
          <View style={styles.buttonWrapper}>
            <Pressable style={[styles.button, styles.buttonNo]} onPress={handleClose}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.buttonYes]} onPress={removeBank}>
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable>
          </View>
        </View>
      </CustomModal>
    </View>
  );
};

export default BanksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  space: {
    height: 5,
  },
  noBanks: {
    textAlign: "center",
    fontSize: 16,
    color: colors.textLight,
  },
  banksContainer: {
    marginTop: 20,
    marginHorizontal: "5%",
  },
  bank: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.greyLight,
    padding: 20,
    marginBottom: 20,
  },
  textContainer: {
    marginLeft: 20,
  },
  bankName: {
    fontSize: 16,
    fontWeight: "500",
  },
  accountNumber: {
    color: colors.textLight,
  },
  close: {
    marginLeft: "auto",
  },
  add: {
    position: "absolute",
    right: 20,
    bottom: 45,
    alignItems: "center",
  },
  addBtn: {
    backgroundColor: colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 5,
  },
  addTxt: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "600",
    marginTop: 5,
  },
  plus: {
    color: colors.white,
    fontSize: 36,
    flex: 1,
    alignSelf: "center",
  },
  modal: {},
  modalText: {
    textAlign: "center",
    fontSize: 18,
    color: colors.textLight,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 18,
    elevation: 2,
  },
  buttonYes: {
    backgroundColor: colors.primary,
  },
  buttonNo: {
    backgroundColor: colors.greyDark,
  },
  textStyle: {
    color: colors.white,
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
  },
});
