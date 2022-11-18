import Svg, { Path } from "react-native-svg";
import { colors } from "../utils/colors";

export default function History({ color }) {
  const active = color === "#246BFD";

  return (
    <Svg width={28} height={28} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M25.667 14c0 6.44-5.227 11.667-11.667 11.667C7.56 25.667 2.333 20.44 2.333 14 2.333 7.56 7.56 2.334 14 2.334c6.44 0 11.667 5.226 11.667 11.666Z"
        stroke={color}
        fill={active ? color : colors.bg}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="m18.33 17.71-3.617-2.159c-.63-.373-1.144-1.271-1.144-2.006V8.76"
        stroke={active ? colors.bg : color}
        fill={active ? color : colors.bg}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
