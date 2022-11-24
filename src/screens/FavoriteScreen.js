import { SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";

const FavoriteScreen = () => {
  return (
    <SafeAreaView styles={styles.container}>
      <ScrollView>

        <View style={styles.wrapper}>
            <Text>Welcome here</Text>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        alignItems: "center"
    }
});
