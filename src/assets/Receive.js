import Svg, { Path, Rect } from "react-native-svg";

export default function Receive() {
  return (
    <Svg width={60} height={60} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect
        width={60}
        height={60}
        rx={30}
        transform="matrix(1 0 0 -1 0 60)"
        fill="#fff"
        fillOpacity={0.1}
      />
      <Path
        d="m18 31 12 12 12-12h-6v-4H24v4h-6ZM36 19H24M36 23H24"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
