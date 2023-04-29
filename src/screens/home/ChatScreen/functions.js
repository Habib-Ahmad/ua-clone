import axios from "../../../api/axios";
import urls from "../../../api/urls";

export const sendMessage = async (user, messageText, setMessageText, setLocalMessages) => {
  if (!messageText) return;
  setMessageText("");
  setLocalMessages((prev) => [
    ...prev,
    {
      id: getId(),
      text: messageText,
      type: { label: "Text", value: 1 },
      userId: user.id,
    },
  ]);
  await axios.post(urls.messaging.send, {
    tradeSessionId: 20,
    text: messageText.trim(),
    type: 1,
  });
};

export const getId = () => {
  return Math.trunc(Math.random() * 100000);
};
