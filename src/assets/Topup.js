import Svg, { Path, Rect } from "react-native-svg";

export default function Topup() {
  return (
    <Svg width={60} height={60} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect width={60} height={60} rx={30} fill="#fff" fillOpacity={0.1} />
      <Path
        d="m18 29 12-12 12 12h-6v4H24v-4h-6ZM36 41H24M36 37H24"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
