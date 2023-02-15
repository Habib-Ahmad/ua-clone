import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Notify from "../../assets/Notify";
import Vector from "../../assets/Vector";
import IconHeader from "../../components/IconHeader";
import MerchantProfile from "../../components/Merchantprofile";
import ScreenHeader from "../../components/ScreenHeader";
import { colors } from "../../utils/colors";


const data = [
  { key: "request", icon: <Notify />, text: "Requests" },
  { key: "history", icon: <Notify />, text: "History" },
  { key: "trade", icon: <Notify />, text: "Trades" },
  { key: "rating", icon: <Notify />, text: "Ratings" },
];

const MerchantScreen = ({ navigation }) => {
  const handlePress = (item) => {
    switch (item.key) {
      case "request":
        navigation.navigate("RequestScreen");
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
            icon={<Vector/>}
            stat={"Status:"}
            statText={"Active"}
            merchant={"Merchant"}
            merchantText={"John Doe"}
            trade={"Trades"}
            tradeText={"20.124"}
        />

        <View style={styles.line}/>

        <View style={styles.iconWrapper}>
          <IconHeader data={data} onPress={handlePress} />
        </View>

        <View style={styles.line}/>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default MerchantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  line: {
    height: 2,
    width: "100%",
    marginTop: "5%",
    backgroundColor: colors.greyLight,
  },
  iconWrapper: {
    paddingHorizontal: 20
  }
});
