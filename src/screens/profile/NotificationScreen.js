import { useCallback, useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import axios from "../../api/axios";
import urls from "../../api/urls";
import Loader from "../../components/Loader";
import EmptyNotification from "../../components/notification/EmptyNotification";
import NotificationPanel from "../../components/notification/NotificationPanel";
import ScreenHeader from "../../components/ScreenHeader";
import { useGlobalContext } from "../../context/context";

const NotificationScreen = () => {
  const {
    state: { loading },
  } = useGlobalContext();
  const [notifications, setNotifications] = useState(null);

  useEffect(() => {
    getNotifications();
  }, []);

  useEffect(() => {
    markAsRead();
  }, [markAsRead]);

  const unreadIds = notifications?.filter((item) => !item.isRead).map((item) => item.id);

  const getNotifications = async () => {
    await axios.get(`${urls.notification.getAll}?pageNumber=1&pageSize=10`).then((res) => {
      setNotifications(res.data.data);
    });
  };

  const markAsRead = useCallback(async () => {
    if (!unreadIds?.length) return;
    await axios.post(urls.notification.markAsRead, { ids: unreadIds });
  }, [unreadIds]);

  return (
    <SafeAreaView style={styles.container}>
      <Loader loading={loading} />
      <ScreenHeader heading="Notifications" />

      {notifications && (
        <FlatList
          data={notifications}
          extraData={notifications}
          renderItem={(props) => <NotificationPanel {...props.item} />}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => <EmptyNotification />}
        />
      )}
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
