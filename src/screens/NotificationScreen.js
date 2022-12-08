import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import EmptyNotification from "../components/notification/EmptyNotification";
import NotificationPanel from "../components/notification/NotificationPanel";
import ScreenHeader from "../components/ScreenHeader";

const DATA = [
  {
    title: "Security Updates!",
    date: "Today I  09:24 AM",
    description:
      "Now ultra has a two factor authenticaton. try it now to make your account more secure",
    isNew: true,
  },
  {
    title: "Multiple card features!",
    date: "Today I  09:24 AM",
    description:
      "Now ultra has a two factor authenticaton. try it now to make your account more secure",
    isNew: true,
  },
  {
    title: "New update availble!",
    date: "Today I  09:24 AM",
    description:
      "Now ultra has a two factor authenticaton. try it now to make your account more secure",
    isNew: false,
  },
];

const NotificationScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <NotificationPanel
        title={item.title}
        date={item.date}
        description={item.description}
        isNew={item.isNew}
      />
    );
  };

  return (
    <SafeAreaView styles={styles.container}>
      <ScreenHeader {...navigation} heading="Notification" />
      <View style={styles.wrapper}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={() => <EmptyNotification />}
        />
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {},
});
