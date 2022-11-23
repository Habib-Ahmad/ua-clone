import Svg, { Path } from "react-native-svg";

export default function Notification() {
  return (
    <Svg width={42} height={42} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M42 21c0 11.598-9.402 21-21 21S0 32.598 0 21 9.402 0 21 0s21 9.402 21 21Z"
        fill="#fff"
        fillOpacity={0.1}
      />
      <Path
        d="M14.268 18.75A6.743 6.743 0 0 1 21.047 12c3.712.028 6.684 3.113 6.684 6.834v.666c0 3.356.703 5.306 1.322 6.375A.75.75 0 0 1 28.406 27H13.594a.75.75 0 0 1-.647-1.125c.618-1.069 1.322-3.019 1.322-6.375v-.75ZM18 27v.75a3 3 0 0 0 6 0V27"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
