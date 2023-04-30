import * as ImagePicker from "expo-image-picker";
import axios from "../../../api/axios";
import urls from "../../../api/urls";
import { uploadImageToCloudinary } from "../../../functions";

export const sendTextMessage = async (id, user, messageText, setMessageText, setLocalMessages) => {
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
    tradeSessionId: id,
    text: messageText.trim(),
    type: 1,
  });
};

export const sendImgMessage = async (id, user, image, setImage, setLocalMessages) => {
  if (!image) return;
  try {
    setImage("");
    setLocalMessages((prev) => [
      ...prev,
      {
        id: getId(),
        text: image,
        type: { label: "Image", value: 2 },
        userId: user.id,
      },
    ]);

    const result = await uploadImageToCloudinary(image, `session_messages/${id}`);

    await axios.post(urls.messaging.send, {
      tradeSessionId: id,
      text: result.secure_url,
      type: 2,
    });
  } catch (error) {
    Promise.reject(error);
  }
};

export const uploadImage = async (setImage) => {
  let _image = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    base64: true,
    quality: 1,
  });
  if (!_image.canceled) {
    setImage(_image.assets[0].base64);
  }
};

export const cancelPreview = (setImage) => {
  setImage(null);
};

export const getId = () => {
  return Math.trunc(Math.random() * 100000);
};
