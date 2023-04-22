import Svg, { Path, Rect } from "react-native-svg";
import { colors } from "../utils";

export default function Swap({ properties }) {
  return (
    <Svg width={60} height={60} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect
        width={60}
        height={60}
        rx={30}
        fill={properties ? colors.primary : "#fff"}
        fillOpacity={0.1}
      />
      <Path
        d="M35.334 36.68v-9.347h-2.667v9.347h-4L34 42l5.334-5.32h-4ZM26 18l-5.333 5.32h4v9.347h2.667V23.32h4L26 18Z"
        fill={properties ? colors.primary : "#fff"}
      />
    </Svg>
  );
}
