import Svg, { Path } from "react-native-svg";

export default function Copy() {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="none">
      <Path
        stroke="#2F6FE3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.295}
        d="M21.498 18.599V4.536H7.436"
      />
      <Path
        stroke="#2F6FE3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.295}
        d="M18.373 7.661H4.311v14.063h14.062V7.66Z"
      />
    </Svg>
  );
}
