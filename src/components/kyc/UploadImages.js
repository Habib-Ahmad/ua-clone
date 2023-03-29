import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Trash from "../../assets/Trash";
import { colors } from "../../utils/colors";

const UploadImages = ({ formState, setFormState, setCameraOn, setId }) => {
  const { photo, documentFront, documentBack } = formState;

  const handlePress = async (id) => {
    setCameraOn(true);
    setId(id);
  };

  const handleDelete = (id) => {
    setFormState((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Upload</Text>

      <View style={styles.document}>
        <View style={styles.header}>
          <View style={styles.textWrapper}>
            <Text style={styles.text1}>Upload document front</Text>
            <Text style={styles.text2}>
              Please provide a clear image of the front of the document
            </Text>
          </View>

          {documentFront ? (
            <Text style={[styles.status, styles.uploaded]}>uploaded</Text>
          ) : (
            <Text style={styles.status}>Not uploaded</Text>
          )}
        </View>

        <View style={styles.body}>
          {documentFront ? (
            <Text>image.png</Text>
          ) : (
            <TouchableOpacity style={styles.btn} onPress={() => handlePress("documentFront")}>
              <Text>Upload image</Text>
            </TouchableOpacity>
          )}
          {documentFront && (
            <TouchableOpacity onPress={() => handleDelete("documentFront")}>
              <Trash />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.document}>
        <View style={styles.header}>
          <View style={styles.textWrapper}>
            <Text style={styles.text1}>Upload document back</Text>
            <Text style={styles.text2}>
              Please provide a clear image of the back of the document if necessary
            </Text>
          </View>

          {documentBack ? (
            <Text style={[styles.status, styles.uploaded]}>uploaded</Text>
          ) : (
            <Text style={styles.status}>Not uploaded</Text>
          )}
        </View>

        <View style={styles.body}>
          {documentBack ? (
            <Text>image.png</Text>
          ) : (
            <TouchableOpacity style={styles.btn} onPress={() => handlePress("documentBack")}>
              <Text>Upload image</Text>
            </TouchableOpacity>
          )}
          {documentBack && (
            <TouchableOpacity onPress={() => handleDelete("documentBack")}>
              <Trash />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.document}>
        <View style={styles.header}>
          <View style={styles.textWrapper}>
            <Text style={styles.text1}>Upload selfie</Text>
            {!photo && <Text style={styles.text2}>Please provide a clear image of yourself</Text>}
          </View>

          {photo ? (
            <Text style={[styles.status, styles.uploaded]}>uploaded</Text>
          ) : (
            <Text style={styles.status}>Not uploaded</Text>
          )}
        </View>

        <View style={styles.body}>
          {photo ? (
            <Text>image.png</Text>
          ) : (
            <TouchableOpacity style={styles.btn} onPress={() => handlePress("photo")}>
              <Text>Upload image</Text>
            </TouchableOpacity>
          )}
          {photo && (
            <TouchableOpacity onPress={() => handleDelete("photo")}>
              <Trash />
            </TouchableOpacity>
          )}
        </View>
      </View>
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
});
