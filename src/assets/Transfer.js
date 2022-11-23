import Svg, { Path, Rect } from "react-native-svg";

export default function Transfer() {
  return (
    <Svg width={60} height={60} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect width={60} height={60} rx={30} fill="#fff" fillOpacity={0.1} />
      <Path
        d="m40.364 18.71-23.3 6.562a1 1 0 0 0-.15 1.875l10.7 5.062c.21.097.378.265.475.475l5.062 10.7a1 1 0 0 0 1.875-.15l6.563-23.3a.988.988 0 0 0-1.225-1.225v0ZM27.939 32.359l5.65-5.65"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
