import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import History2 from "../../assets/History2";
import Rating from "../../assets/Rating";
import Trade from "../../assets/Trade";
import Vector from "../../assets/Vector";
import DisplayCard from "../../components/DisplayCard";
import IconHeader from "../../components/IconHeader";
import MerchantProfile from "../../components/Merchantprofile";
import ScreenHeader from "../../components/ScreenHeader";
import { colors } from "../../utils/colors";

const data = [
  { key: "request", icon: <Rating />, text: "Requests" },
  { key: "history", icon: <History2 />, text: "History" },
  { key: "trade", icon: <Trade />, text: "Trades" },
  { key: "rating", icon: <Rating />, text: "Ratings" },
];

const requests = [
  {
    id: 1,
    name: "Wade Warren",
    email: "nevaeh.simmons@example.com",
    type: "Withdrawal",
    amount: "₦20,000",
    date: "20th Aug 2023  9:30am",
  },
  {
    id: 1,
    name: "Wade Jude",
    email: "nevaeh.simmons@example.com",
    type: "Withdrawal",
    amount: "₦20,000",
    date: "20th Aug 2023  9:30am",
  },
  {
    id: 1,
    name: "Tunde Hammed",
    email: "nevaeh.simmons@example.com",
    type: "Withdrawal",
    amount: "₦20,000",
    date: "20th Aug 2023  9:30am",
  },
];

const MerchantScreen = ({ navigation }) => {
  const handlePress = (item) => {
    switch (item.key) {
      case "request":
        navigation.navigate("RequestScreen", {
          data: requests,
        });
        break;
      case "history":
        navigation.navigate("MerchantHistoryScreen");
        break;
      case "trade":
        navigation.navigate("TradeScreen");
        break;
      case "rating":
        navigation.navigate("RatingScreen");
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView styles={styles.container}>
      <ScrollView>
        <ScreenHeader heading="Merchant" />
        <MerchantProfile
          icon={<Vector />}
          stat={"Status:"}
          statText={"Active"}
          merchant={"Merchant"}
          merchantText={"John Doe"}
          trade={"Trades"}
          tradeText={"20.124"}
        />

        <View>
          <IconHeader data={data} onPress={handlePress} />
        </View>

        <View>
          <View style={styles.flexRow}>
            <Text style={styles.label}>Latest Request</Text>
            <TouchableOpacity activeOpacity={0.9}>
              <Text style={styles.viewAllLabel}>View All</Text>
            </TouchableOpacity>
          </View>
          {requests.map((item, index) => {
            return (
              <DisplayCard key={index} onPress={() => {}}>
                <View>
                  <Image source={require("../../assets/avatar.jpg")} style={styles.imageStyle} />
                </View>
                <View style={styles.infoWrapper}>
                  <Text style={styles.heading}>{item.name}</Text>
                  <Text style={styles.paragraph}>{item.email}</Text>
                  <Text style={styles.paragraph}>Type: {item.type}</Text>
                  <Text style={styles.paragraph}>
                    Amount: <Text style={{ color: colors.primary }}>{item.amount}</Text>
                  </Text>
                  <Text style={styles.paragraph}>Date: {item.date}</Text>
                </View>
              </DisplayCard>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MerchantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageStyle: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  infoWrapper: {
    marginLeft: 10,
  },

  heading: {
    fontSize: 20,
    fontWeight: "900",
  },
  paragraph: {
    fontSize: 14,
    marginVertical: 2,
    color: colors.textLight,
  },
  flexRow: {
    marginTop: "5%",
    marginBottom: "5%",
    paddingHorizontal: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  label: {
    fontSize: 16,
  },
  viewAllLabel: {
    fontSize: 16,
    color: colors.primary,
  },
});
