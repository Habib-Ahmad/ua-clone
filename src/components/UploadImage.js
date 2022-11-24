import { useState } from "react";
import { Image, StyleSheet,  View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { colors } from "../utils/colors";
import ImageButton from "./input/ImageButton";

const UploadImage = () => {
    const [image, setImage] = useState(null);
    const addImage = async () => {
        let _image = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4,3],
          quality: 1,
        });
        if (!_image.cancelled) {
          setImage(_image.uri);
        }
      };
  return (
    <View>
        <View style={styles.container}>
            {
                image  && <Image source={{ uri: image }} style={styles.imgWrapper} />
            }
        </View>

        <View>
            <ImageButton onPress={addImage} title= {image ? "Edit" : "Upload"}/>
        </View>
    </View>
  );
};

export default UploadImage;

const styles = StyleSheet.create({
    container:{
        elevation:2,
        height:100,
        width:100,
        backgroundColor:colors.white,
        position:"relative",
        borderRadius:999,
        overflow:"hidden",
    },
    imgWrapper: {
        width: 100,
        height: 100,
    },

});
