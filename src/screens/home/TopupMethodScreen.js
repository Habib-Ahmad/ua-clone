import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Checkbox from "expo-checkbox";
import BuildingSmall from "../../assets/BuildingSmall";
import CardBig from "../../assets/CardBig";
import TopupBlue from "../../assets/TopupBlue";
import Button from "../../components/input/Button";
import ScreenHeader from "../../components/ScreenHeader";
import { colors } from "../../utils";

const data = [
  {
    id: 0,
    name: "P2P (Recommended)",
    icon: BuildingSmall,
    selected: false,
    available: true,
  },
  {
    id: 1,
    name: "Card",
    icon: CardBig,
    selected: false,
    available: false,
  },
];

const TopupMethodScreen = ({ navigation }) => {
  const [activeId, setActiveId] = useState(null);

  const select = (item) => {
    if (!item.available) return;

    setActiveId(item.id);
  };

  const handlePress = () => {
    navigation.navigate("TradesScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ScreenHeader heading="Top up" />

        <View style={styles.iconWrapper}>
          <TopupBlue />

          <Text style={styles.subheading}>
            Select one of the prefered method to Top up your account
          </Text>
        </View>

        <View style={styles.inputWrapper}>
          {data.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.item,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  borderColor: activeId === item.id ? colors.primary : colors.greyLight,
                  opacity: item.available ? 1 : 0.5,
                },
              ]}
              onPress={() => select(item)}
              activeOpacity={0.5}
            >
              <View style={styles.nameWrapper}>
                <item.icon />
                <Text style={styles.name}>{item.name}</Text>
              </View>
              <Checkbox
                style={styles.checkbox}
                value={activeId === item.id}
                color={activeId === item.id ? colors.primary : undefined}
              />
            </TouchableOpacity>
          ))}
        </View>

        <Button title="Continue" onPress={handlePress} disabled={!String(activeId).length} />
      </View>
    </View>
  );
};

export default TopupMethodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  wrapper: {
    flex: 1,
  },
  iconWrapper: {
    marginTop: 10,
    marginBottom: 40,
    alignItems: "center",
  },
  subheading: {
    marginTop: 20,
    padding: "5%",
    textAlign: "center",
  },
  inputWrapper: {
    flex: 0.95,
    paddingHorizontal: "5%",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    borderRadius: 15,
    borderWidth: 2,
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  nameWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    marginLeft: 10,
  },
});
