import Svg, { Path } from "react-native-svg";

export default function Share() {
  return (
    <Svg width={42} height={42} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M42 21c0 11.598-9.402 21-21 21S0 32.598 0 21 9.402 0 21 0s21 9.402 21 21Z"
        fill="#fff"
        fillOpacity={0.1}
      />
      <Path
        d="M15 24a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM25.5 30.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM25.5 17.25a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM22.978 15.872l-5.456 3.506M17.522 22.622l5.456 3.506"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
