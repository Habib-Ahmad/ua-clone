import { StyleSheet, Text, View } from "react-native";
import BellRinging from "../../assets/BellRinging";
import { colors } from "../../utils";

const NotificationPanel = ({ title, message, isRead }) => {
  return (
    <View style={styles.container} activeOpacity={0.7}>
      <View style={styles.iconBox}>
        <BellRinging />
      </View>

      <View style={styles.detailBox}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>

      {!isRead && (
        <View style={styles.isReadStyle}>
          <Text style={styles.isReadTxt}>New</Text>
        </View>
      )}
    </View>
  );
};

export default NotificationPanel;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: "5%",
    alignItems: "flex-start",
    paddingVertical: 30,
  },
  iconBox: {
    justifyContent: "center",
    padding: 15,
    borderRadius: 50,
    backgroundColor: colors.blueTransparent,
  },
  detailBox: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  message: {
    fontSize: 16,
    color: colors.textLight,
  },
  isReadStyle: {
    backgroundColor: colors.primary,
    padding: 5,
    borderRadius: 22,
  },
  isReadTxt: {
    fontSize: 10,
    color: colors.white,
    paddingHorizontal: 2,
  },
});
