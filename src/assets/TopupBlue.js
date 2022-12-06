import Svg, { Path, Rect } from "react-native-svg";

export default function TopupBlue() {
  return (
    <Svg width={96} height={96} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect width={96} height={96} rx={48} fill="#246BFD" fillOpacity={0.1} />
      <Path
        d="M68.28 46.62a1.6 1.6 0 0 1-1.48.98h-8v4.8a1.6 1.6 0 0 1-1.6 1.6H38a1.6 1.6 0 0 1-1.6-1.6v-4.8h-8a1.6 1.6 0 0 1-1.48-.98 1.68 1.68 0 0 1 .34-1.76l19.2-19.2a1.62 1.62 0 0 1 2.28 0l19.2 19.2a1.68 1.68 0 0 1 .34 1.76ZM57.2 63.6H38a1.6 1.6 0 0 0 0 3.2h19.2a1.6 1.6 0 1 0 0-3.2Zm0-6.4H38a1.6 1.6 0 0 0 0 3.2h19.2a1.6 1.6 0 1 0 0-3.2Z"
        fill="#246BFD"
      />
    </Svg>
  );
}
