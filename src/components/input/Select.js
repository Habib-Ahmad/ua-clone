import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { colors } from "../../utils";

const Select = ({ label, options, value, setValue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Picker
        style={styles.select}
        selectedValue={value}
        onValueChange={(itemValue) => setValue(itemValue)}
        mode="dropdown"
      >
        <Picker.Item
          key="default"
          label="Select payment currency"
          value=""
          enabled={false}
          style={styles.defaultOption}
        />
        {options?.map((item) => (
          <Picker.Item key={item.id} label={item.name} value={item.id} />
        ))}
      </Picker>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 65,
    marginHorizontal: 5,
    flexShrink: 1,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.primary,
  },
  label: {
    position: "absolute",
    top: -12,
    left: "5%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 20,
    backgroundColor: colors.bg,
    color: colors.primary,
    textAlign: "center",
  },
  select: {
    height: 65,
    padding: 20,
  },
  defaultOption: {
    color: colors.textLight,
  },
});
