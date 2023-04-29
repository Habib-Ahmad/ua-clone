import { useState } from "react";
import { FlatList, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Attachment from "../../../assets/Attachment";
import Emoji from "../../../assets/Emoji";
import ScreenHeader from "../../../components/ScreenHeader";
import { useGlobalContext } from "../../../context/context";
import { colors } from "../../../utils";
import { RenderItem } from "./components";
import { sendMessage } from "./functions";
import { useGetMessages } from "./hooks";

const ChatScreen = ({ route }) => {
  const { id } = route.params;
  const {
    state: { user },
  } = useGlobalContext();

  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState([]);
  const [localMessages, setLocalMessages] = useState([]);

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
            <TouchableOpacity onPress={() => {}}>
              <Attachment />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.send, { backgroundColor: messageText ? colors.primary : colors.greyDark }]}
          activeOpacity={0.7}
          onPress={() => sendMessage(user, messageText, setMessageText, setLocalMessages)}
        ></TouchableOpacity>
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
  send: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
