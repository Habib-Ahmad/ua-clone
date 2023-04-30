import { useState } from "react";
import { FlatList, Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Attachment from "../../../assets/Attachment";
import Emoji from "../../../assets/Emoji";
import ScreenHeader from "../../../components/ScreenHeader";
import { useGlobalContext } from "../../../context/context";
import { colors } from "../../../utils";
import { RenderItem, Send } from "./components";
import { cancelPreview, sendImgMessage, sendTextMessage, uploadImage } from "./functions";
import { useGetMessages } from "./hooks";

const ChatScreen = ({ route }) => {
  const { id } = route.params;
  const {
    state: { user },
  } = useGlobalContext();

  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState([]);
  const [localMessages, setLocalMessages] = useState([]);
  const [image, setImage] = useState(null);

  useGetMessages(id, setLocalMessages, setMessages);

  return (
    <View style={styles.container}>
      <ScreenHeader heading="Merchant" />

      <FlatList
        data={localMessages}
        extraData={messages}
        renderItem={(props) => <RenderItem {...props} userId={user.id} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesContainer}
        inverted
      />

      {image && (
        <View style={styles.imgPreview}>
          <TouchableOpacity
            onPress={() => cancelPreview(setImage)}
            style={styles.closeButton}
            activeOpacity={0.7}
          >
            <Ionicons name="close-outline" size={38} color="white" />
          </TouchableOpacity>
          <Image style={styles.img} source={{ uri: `data:image/png;base64,${image}` }} />
          <View style={styles.sendWrapper}>
            <Send
              messageText={messageText}
              image={image}
              onPress={() => sendImgMessage(id, user, image, setImage, setLocalMessages)}
            />
          </View>
        </View>
      )}

      <View style={styles.inputWrapper}>
        <View style={styles.inputContainer}>
          <TouchableOpacity>
            <Emoji />
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            placeholder="Message"
            value={messageText}
            onChangeText={setMessageText}
            multiline
            returnKeyType="done"
            enablesReturnKeyAutomatically
          />

          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.icon} onPress={() => {}}>
              <Attachment />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon} onPress={() => uploadImage(setImage)}>
              <Attachment />
            </TouchableOpacity>
          </View>
        </View>

        <Send
          messageText={messageText}
          image={image}
          onPress={() => sendTextMessage(id, user, messageText, setMessageText, setLocalMessages)}
        />
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imgPreview: {
    position: "absolute",
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: colors.black,
    zIndex: 100,
    paddingBottom: 20,
  },
  sendWrapper: {
    marginHorizontal: 20,
  },
  closeButton: {
    position: "relative",
    top: "8%",
    right: "5%",
    width: "100%",
    alignItems: "flex-end",
    zIndex: 300,
  },
  img: {
    width: "100%",
    height: "90%",
    resizeMode: "contain",
    position: "relative",
    zIndex: 200,
  },
  messagesContainer: {
    paddingTop: 10,
    paddingHorizontal: "6%",
    paddingBottom: 20,
    flexDirection: "column-reverse",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primaryLight,
    borderRadius: 32,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 50,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    marginLeft: 5,
  },
});
