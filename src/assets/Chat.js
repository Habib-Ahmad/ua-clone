import Svg, { Path } from "react-native-svg";

export default function Chat() {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="none">
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.61 17.977a9.74 9.74 0 1 1 3.413 3.412l-3.372.955a.802.802 0 0 1-.995-.996l.955-3.371ZM9.75 11.375h6.5M9.75 14.625h6.5"
      />
    </Svg>
  );
}
