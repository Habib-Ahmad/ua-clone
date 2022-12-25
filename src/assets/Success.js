import Svg, { Circle, Path, Rect } from "react-native-svg";

export default function Success() {
  return (
    <Svg width={189} height={162} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect
        x={28}
        y={29.381}
        width={132.619}
        height={132.619}
        rx={66.309}
        fill="#2F6FE3"
        fillOpacity={0.1}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m129.75 75.454-38.574 48.231L60.874 98.43l5.717-6.86L89.89 110.98l32.892-41.102 6.968 5.575Z"
        fill="#2F6FE3"
      />
      <Circle cx={39.5} cy={149.5} r={3.5} fill="#246BFD" fillOpacity={0.3} />
      <Circle cx={5} cy={124} r={5} fill="#246BFD" fillOpacity={0.3} />
      <Circle cx={36} cy={10} r={10} fill="#246BFD" fillOpacity={0.3} />
      <Circle cx={181.5} cy={27.5} r={7.5} fill="#246BFD" fillOpacity={0.3} />
      <Circle cx={176.5} cy={131.5} r={2.5} fill="#246BFD" fillOpacity={0.3} />
    </Svg>
  );
}
