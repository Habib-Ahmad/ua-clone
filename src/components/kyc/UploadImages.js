import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";

const imgs = [
  {
    name: "documentFront",
    text1: "Upload document front",
    text2: "Please provide a clear image of the front of the document",
  },
  {
    name: "documentBack",
    text1: "Upload document back (optional)",
    text2: "Please provide a clear image of the back of the document",
  },
  {
    name: "photo",
    text1: "Upload selfie",
    text2: "Please provide a clear image of yourself",
  },
];

const UploadImages = ({ base64, setBase64, setCameraOn, setId }) => {
  const handlePress = async (id) => {
    setCameraOn(true);
    setId(id);
  };

  const handleDelete = (id) => {
    setBase64((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Upload</Text>

      {imgs.map((img) => (
        <View style={styles.document} key={img.name}>
          <View style={styles.header}>
            <View style={styles.textWrapper}>
              <Text style={styles.text1}>{img.text1}</Text>
              <Text style={styles.text2}>{img.text2}</Text>
            </View>

            {base64[img.name] ? (
              <Text style={[styles.status, styles.uploaded]}>uploaded</Text>
            ) : (
              <Text style={styles.status}>Not uploaded</Text>
            )}
          </View>

          <View style={styles.body}>
            {base64[img.name] ? (
              <TouchableOpacity onPress={() => handleDelete(img.name)} activeOpacity={0.6}>
                <Text style={styles.remove}>Remove</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.btn} onPress={() => handlePress(img.name)}>
                <Text>Upload image</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default UploadImages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: "500",
    paddingVertical: 20,
  },
  document: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.greyDark,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  textWrapper: {
    width: "65%",
    marginRight: "10%",
  },
  text1: {
    fontSize: 18,
    marginBottom: 10,
  },
  text2: {
    fontWeight: "200",
  },
  status: {
    color: colors.red,
    fontSize: 12,
    fontWeight: "300",
  },
  uploaded: {
    color: colors.green,
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    backgroundColor: colors.greyDark,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 22,
  },
  remove: {
    color: colors.red,
  },
});
