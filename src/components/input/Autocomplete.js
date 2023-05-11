import { StyleSheet, Text, View } from "react-native";
import AutocompleteInput from "react-native-autocomplete-input";
import { colors } from "../../utils";

const Autocomplete = ({ label, data, value, onChangeText, keyExtractor, renderItem }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputContainer}>
        <AutocompleteInput
          data={data}
          value={value}
          onChangeText={onChangeText}
          flatListProps={{
            keyExtractor: keyExtractor,
            renderItem: renderItem,
            style: styles.flatList,
            contentContainerStyle: {},
            keyboardShouldPersistTaps: "always",
          }}
          style={styles.input}
          inputContainerStyle={styles.inputContainerStyle}
          listContainerStyle={styles.listContainerStyle}
        />
      </View>
    </View>
  );
};

export default Autocomplete;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 65,
    marginHorizontal: 5,
    flexShrink: 1,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.primary,
    zIndex: 100,
  },
  label: {
    position: "absolute",
    top: -12,
    left: "5%",
    paddingHorizontal: 10,
    height: 20,
    backgroundColor: colors.bg,
    color: colors.primary,
    textAlign: "center",
    zIndex: 10,
  },
  inputContainer: {
    flex: 1,
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
  },
  input: {
    backgroundColor: "transparent",
    height: 65,
  },
  listContainerStyle: {
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  inputContainerStyle: {
    paddingHorizontal: 20,
    borderWidth: 0,
  },
  flatList: {
    backgroundColor: "white",
    paddingTop: 20,
    borderWidth: 0,
  },
});
