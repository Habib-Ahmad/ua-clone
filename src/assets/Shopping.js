import Svg, { Path, Rect } from "react-native-svg";
import { colors } from "../utils/colors";

export default function Shopping() {
  return (
    <Svg width="98" height="94" viewBox="0 0 98 94" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect
        x="0.536133"
        width="96.9283"
        height="94"
        rx="47"
        fill={colors.primaryLight}
        fill-opacity="0.1"
      />
      <Path
        d="M39.3029 65.8091C38.2577 65.8091 37.3632 65.4373 36.6195 64.6936C35.8745 63.9486 35.5021 63.0535 35.5021 62.0083C35.5021 60.9631 35.8745 60.068 36.6195 59.323C37.3632 58.5793 38.2577 58.2074 39.3029 58.2074C40.3481 58.2074 41.2426 58.5793 41.9863 59.323C42.7312 60.068 43.1037 60.9631 43.1037 62.0083C43.1037 63.0535 42.7312 63.9486 41.9863 64.6936C41.2426 65.4373 40.3481 65.8091 39.3029 65.8091ZM58.3071 65.8091C57.2618 65.8091 56.3674 65.4373 55.6237 64.6936C54.8787 63.9486 54.5062 63.0535 54.5062 62.0083C54.5062 60.9631 54.8787 60.068 55.6237 59.323C56.3674 58.5793 57.2618 58.2074 58.3071 58.2074C59.3523 58.2074 60.2474 58.5793 60.9923 59.323C61.736 60.068 62.1079 60.9631 62.1079 62.0083C62.1079 63.0535 61.736 63.9486 60.9923 64.6936C60.2474 65.4373 59.3523 65.8091 58.3071 65.8091ZM37.6875 35.4024L42.2485 44.9045H55.5515L60.7776 35.4024H37.6875ZM35.8821 31.6016H63.9133C64.6418 31.6016 65.1961 31.926 65.5762 32.5746C65.9562 33.2246 65.9721 33.8821 65.6237 34.5473L58.8772 46.7099C58.5288 47.3434 58.0613 47.8343 57.4747 48.1828C56.8893 48.5312 56.2483 48.7054 55.5515 48.7054H41.3934L39.3029 52.5062H62.1079V56.307H39.3029C37.8776 56.307 36.8007 55.6812 36.0722 54.4294C35.3437 53.1789 35.312 51.9361 35.9772 50.7008L38.5427 46.0448L31.7012 31.6016H27.9004V27.8008H34.0767L35.8821 31.6016ZM42.2485 44.9045H55.5515H42.2485Z"
        fill="#246BFD"
      />
    </Svg>
  );
}
