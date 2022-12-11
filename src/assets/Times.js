import Svg, { Path, Rect } from "react-native-svg";

export default function Times({ width, height }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M19.5312 5.46875L5.46875 19.5312"
        stroke="black"
        stroke-opacity="0.4"
        stroke-width="1.5625"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M19.5312 19.5312L5.46875 5.46875"
        stroke="black"
        stroke-opacity="0.4"
        stroke-width="1.5625"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
