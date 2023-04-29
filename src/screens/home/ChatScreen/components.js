import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../utils";

export const RenderItem = (props) => {
  const { userId, item } = props;

  return (
    <View
      style={[styles.messageBubble, item.userId === userId ? styles.myBubble : styles.otherBubble]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  myBubble: {
    alignSelf: "flex-end",
    backgroundColor: colors.primary,
  },
  otherBubble: {
    alignSelf: "flex-start",
    backgroundColor: colors.greyDark,
  },
  messageBubble: {
    maxWidth: "70%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#eee",
    marginBottom: 10,
  },
  messageText: {
    color: colors.white,
    fontSize: 16,
  },
});
