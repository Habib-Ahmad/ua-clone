import { Modal, StyleSheet, View } from "react-native";
import { useGlobalContext } from "../../context/context";
import { colors } from "../../utils";
import Loader from "../Loader";

const CustomModal = ({ modalVisible, setModalVisible, children }) => {
  const { state } = useGlobalContext();

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <Loader loading={state.loading} />
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
    paddingHorizontal: "5%",
  },
  modalView: {
    width: "100%",
    backgroundColor: colors.bg,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
