import { useEffect, useRef, useState } from "react";
import { Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Camera, CameraType } from "expo-camera";
import { colors } from "../utils/colors";

const WINDOW_HEIGHT = Dimensions.get("window").height;
const CAPTURE_SIZE = Math.floor(WINDOW_HEIGHT * 0.08);

const CustomCamera = ({ setCameraOn, setFormState, id }) => {
  const cameraRef = useRef();

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [isPreview, setIsPreview] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [imagePadding, setImagePadding] = useState(0);
  const [ratio, setRatio] = useState("4:3"); // default is 4:3
  const { height, width } = Dimensions.get("window");
  const screenRatio = height / width;
  const [isRatioSet, setIsRatioSet] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    onHandlePermission();
  }, []);

  const setCameraReady = async () => {
    setIsCameraReady(true);
    if (!isRatioSet) {
      await prepareRatio();
    }
  };

  const prepareRatio = async () => {
    let desiredRatio = "4:3"; // Start with the system default
    // This issue only affects Android
    if (Platform.OS === "android") {
      const ratios = await cameraRef.current.getSupportedRatiosAsync();

      // Calculate the width/height of each of the supported camera ratios
      // These width/height are measured in landscape mode
      // find the ratio that is closest to the screen ratio without going over
      const distances = {};
      let realRatios = {};
      let minDistance = null;
      for (const ratio of ratios) {
        const parts = ratio.split(":");
        const realRatio = parseInt(parts[0]) / parseInt(parts[1]);
        realRatios[ratio] = realRatio;
        // ratio can't be taller than screen, so we don't want an abs()
        const distance = screenRatio - realRatio;
        distances[ratio] = realRatio;
        if (minDistance == null) {
          minDistance = ratio;
        } else {
          if (distance >= 0 && distance < distances[minDistance]) {
            minDistance = ratio;
          }
        }
      }
      // set the best match
      desiredRatio = minDistance;
      //  calculate the difference between the camera width and the screen height
      const remainder = Math.floor((height - realRatios[desiredRatio] * width) / 2);
      // set the preview padding and preview ratio
      setImagePadding(remainder);
      setRatio(desiredRatio);
      // Set a flag so we don't do this
      // calculation each time the screen refreshes
      setIsRatioSet(true);
    }
  };

  const onHandlePermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
  };

  const cancelPreview = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
  };

  const switchCamera = () => {
    if (isPreview) {
      return;
    }
    setCameraType((prevCameraType) =>
      prevCameraType === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const onSnap = async () => {
    if (cameraRef.current) {
      const options = { quality: 1, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.base64;
      setImage(source);

      if (source) {
        await cameraRef.current.pausePreview();
        setIsPreview(true);
      }
    }
  };

  const onUse = async () => {
    setFormState((prev) => ({
      ...prev,
      [id]: image,
    }));
    await cameraRef.current.resumePreview();
    setIsPreview(false);
    setCameraOn(false);
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text style={styles.text}>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={[styles.container, { marginTop: imagePadding, marginBottom: imagePadding }]}
        type={cameraType}
        onCameraReady={setCameraReady}
        ratio={ratio}
      />
      <View style={styles.container}>
        {isPreview ? (
          <>
            <TouchableOpacity
              onPress={cancelPreview}
              style={styles.closeButton}
              activeOpacity={0.7}
            >
              <AntDesign name="closecircleo" size={32} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.useWrapper} onPress={onUse}>
              <View style={styles.use}>
                <Text style={styles.useText}>Use</Text>
              </View>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity style={styles.closeButton} onPress={() => setCameraOn(false)}>
              <AntDesign name="closecircleo" size={32} color="white" />
            </TouchableOpacity>

            <View style={styles.bottomButtonsContainer}>
              <TouchableOpacity
                disabled={!isCameraReady}
                onPress={switchCamera}
                style={styles.flip}
              >
                <Ionicons name="camera-reverse-outline" size={32} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                disabled={!isCameraReady}
                onPress={onSnap}
                style={styles.capture}
              />
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default CustomCamera;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  bottomButtonsContainer: {
    position: "absolute",
    flexDirection: "row",
    bottom: 28,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  capture: {
    position: "absolute",
    bottom: 30,
    backgroundColor: colors.primary,
    height: CAPTURE_SIZE,
    width: CAPTURE_SIZE,
    borderRadius: Math.floor(CAPTURE_SIZE / 2),
  },
  flip: {
    position: "absolute",
    bottom: 45,
    left: "25%",
  },
  closeButton: {
    position: "absolute",
    top: 70,
    right: 10,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  useWrapper: {
    position: "absolute",
    bottom: 70,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  use: {
    backgroundColor: colors.primary,
    width: 100,
    height: 50,
    borderRadius: 22,
  },
  useText: {
    alignSelf: "center",
    height: "100%",
    verticalAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
    color: colors.white,
    fontWeight: "500",
  },
});
