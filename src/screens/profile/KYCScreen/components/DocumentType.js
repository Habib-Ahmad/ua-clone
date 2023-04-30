import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../../utils";
import { docs } from "../data";

const DocumentType = ({ formState, setFormState }) => {
  const handlePress = (value) => {
    setFormState((prevState) => ({
      ...prevState,
      identityType: value,
    }));
  };

  return (
    <View style={styles.container3}>
      <Text style={styles.heading3}>Select Document Type</Text>

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
  container3: {
    flex: 1,
  },
  heading3: {
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
