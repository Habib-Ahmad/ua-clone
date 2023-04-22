import Svg, { Path, Rect } from "react-native-svg";
import { colors } from "../utils";

export default function ShareButton({ width, height }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 68 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width="67.0249" height="65" rx="32.5" fill={colors.primaryLight} fill-opacity="0.1" />
      <Path
        d="M39.2244 35.624L44.4744 30.374L39.2244 25.124"
        stroke="#246BFD"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M40.9746 42.625H24.3496C24.1175 42.625 23.895 42.5328 23.7309 42.3687C23.5668 42.2046 23.4746 41.9821 23.4746 41.75V28.625"
        stroke="#246BFD"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M28.1777 38.249C28.7616 35.9952 30.0773 33.999 31.9183 32.5737C33.7593 31.1484 36.0214 30.3747 38.3496 30.374H44.4746"
        stroke="#246BFD"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
