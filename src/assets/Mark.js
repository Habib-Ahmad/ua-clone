import Svg, { Circle, Path, Rect } from "react-native-svg";
import { colors } from "../utils";

export default function Mark() {
  return (
    <Svg
      width="134"
      height="134"
      viewBox="0 0 134 134"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        y="1.38086"
        width="132.619"
        height="132.619"
        rx="66.3093"
        fill={colors.primaryLight}
        fill-opacity="0.1"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M101.75 47.4533L63.1759 95.6844L32.874 70.4298L38.5914 63.569L61.8895 82.9812L94.782 41.8789L101.75 47.4533Z"
        fill="#2F6FE3"
      />
      <Circle cx="11.5" cy="121.5" r="3.5" fill={colors.primaryLight} fill-opacity="0.3" />
    </Svg>
  );
}
