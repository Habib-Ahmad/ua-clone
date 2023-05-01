import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import avatar from "../../assets/avatar.jpg";
import Star from "../../assets/Star";
import StarFill from "../../assets/StarFill";
import { colors } from "../../utils";

export default function ContactCard({ name, info, favorite, transfer }) {
  const naviation = useNavigation();

  const handlePress = () => {
    naviation.navigate("TransferDetailsScreen", {
      name: name,
      info: info,
    });
  };

  return (
    <View style={styles.wrapper}>
      {JSON.stringify(transfer) ? (
        <TouchableOpacity style={styles.flexRow} activeOpacity={0.8} onPress={handlePress}>
          <View>
            <Image source={avatar} style={styles.imageStyle} />
          </View>
          <View style={styles.flexTwo}>
            <Text style={styles.nameStyle}>{name}</Text>
            <Text style={styles.infoStyle}>{info}</Text>
          </View>
          <View style={styles.closeBtn}>
            {JSON.stringify(favorite) ? (
              <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
                <StarFill />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
                <Star />
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      ) : (
        <View style={styles.flexRow}>
          <View>
            <Image source={avatar} style={styles.imageStyle} />
          </View>
          <View style={styles.flexTwo}>
            <Text style={styles.nameStyle}>{name}</Text>
            <Text style={styles.infoStyle}>{info}</Text>
          </View>
          <View style={styles.closeBtn}>
            {JSON.stringify(favorite) ? (
              <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
                <StarFill />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
                <Star />
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    marginVertical: "1%",
    padding: 20,
    borderColor: colors.textLight,
  },
  flexTwo: {
    marginLeft: "3%",
    justifyContent: "space-around",
    flex: 1,
  },
  nameStyle: {
    fontSize: 16,
    fontWeight: "500",
  },
  infoStyle: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.textLight,
  },
  closeBtn: {
    justifyContent: "center",
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
