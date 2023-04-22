import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../utils";

const docs = [
  {
    name: "National Identity Number",
    value: 1,
  },
  {
    name: "International Passport",
    value: 2,
  },
  {
    name: "Driver's Licence",
    value: 3,
  },
  {
    name: "Voter's Card",
    value: 4,
  },
];

const DocumentType = ({ formState, setFormState }) => {
  const handlePress = (value) => {
    setFormState((prevState) => ({
      ...prevState,
      identityType: value,
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Document Type</Text>

      {docs.map((doc) => (
        <TouchableOpacity
          style={[styles.doc, formState.identityType === doc.value && styles.active]}
          key={doc.value}
          onPress={() => handlePress(doc.value)}
          activeOpacity={0.7}
        >
          <Text>{doc.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DocumentType;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontWeight: "500",
    fontSize: 18,
    marginBottom: 30,
    marginTop: 20,
  },
  doc: {
    padding: 20,
    backgroundColor: colors.greyLight,
    marginBottom: 15,
    borderRadius: 20,
  },
  active: {
    borderColor: colors.primary,
    borderWidth: 3,
  },
});
