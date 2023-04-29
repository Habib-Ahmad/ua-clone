import { useEffect } from "react";
import axios from "../../../api/axios";
import urls from "../../../api/urls";
import { useGlobalContext } from "../../../context/context";

export const useGetMessages = (id, setLocalMessages, setMessages) => {
  const {
    state: { realTimeData },
  } = useGlobalContext();

  useEffect(() => {
    const getMessages = async () => {
      await axios
        .get(`${urls.messaging.getSessionMessages}/${id}?pageNumber=1&pageSize=100`)
        .then((res) => {
          setLocalMessages(res.data.data);
          setMessages(res.data.data);
        });
    };
    getMessages();
  }, [id, realTimeData, setLocalMessages, setMessages]);
};
