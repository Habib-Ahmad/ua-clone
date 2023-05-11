import Svg, { Path } from "react-native-svg";

export default function Close() {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="none">
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.4}
        strokeWidth={1.563}
        d="M19.531 5.469 5.47 19.53M19.531 19.531 5.47 5.47"
      />
    </Svg>
  );
}
