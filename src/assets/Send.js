import Svg, { Path, Rect } from "react-native-svg";

export default function Send() {
  return (
    <Svg width={60} height={60} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect width={60} height={60} rx={30} fill="#fff" fillOpacity={0.1} />
      <Path
        d="m40.363 18.708-23.3 6.562a1 1 0 0 0-.15 1.875l10.7 5.063c.21.097.378.265.475.475l5.063 10.7a1 1 0 0 0 1.875-.15l6.562-23.3a.987.987 0 0 0-1.225-1.225v0ZM27.939 32.359l5.65-5.65"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
