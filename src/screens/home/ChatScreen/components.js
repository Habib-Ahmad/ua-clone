import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../utils";

export const RenderItem = (props) => {
  const { userId, item } = props;

  if (item.type.label === "Image") {
    const isBase64 = item.text.length > 1000;
    return (
      <View
        style={[
          styles.messageBubble,
          styles.messageImgWrapper,
          item.userId === userId ? styles.myBubble : styles.otherBubble,
        ]}
      >
        {isBase64 ? (
          <Image
            style={styles.messageImg}
            source={{ uri: `data:image/png;base64,${item.text}` }}
            alt=""
          />
        ) : (
          <Image style={styles.messageImg} source={{ uri: item.text }} alt="" />
        )}
      </View>
    );
  }

  return (
    <View
      style={[styles.messageBubble, item.userId === userId ? styles.myBubble : styles.otherBubble]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );
};

export const Send = ({ messageText, image, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.send,
        { backgroundColor: messageText || image ? colors.primary : colors.greyDark },
      ]}
      activeOpacity={0.7}
      onPress={onPress}
    ></TouchableOpacity>
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
    maxWidth: "80%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#eee",
    marginBottom: 10,
  },
  messageImgWrapper: {
    width: "70%",
    padding: 5,
  },
  messageText: {
    color: colors.white,
    fontSize: 16,
  },
  messageImg: {
    width: "100%",
    backgroundColor: colors.black,
    height: 400,
    resizeMode: "contain",
  },
  send: {
    width: 45,
    height: 45,
    borderRadius: 45,
    alignSelf: "flex-end",
    backgroundColor: colors.primary,
  },
});
