import Svg, { Circle, Path } from "react-native-svg";

export default function Mark({ width, height }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 70 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M69.75 6.45355L31.1759 54.6846L0.874023 29.4301L6.59136 22.5693L29.8895 41.9814L62.782 0.87915L69.75 6.45355Z"
        fill="#2F6FE3"
      />
    </Svg>
  );
}
