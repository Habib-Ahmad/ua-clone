import Svg, { Path } from "react-native-svg";

export default function Avatar() {
  return (
    <Svg width={30} height={30} xmlns="http://www.w3.org/2000/svg" fill="none">
      <Path
        fill="#246BFD"
        d="M14.75.917C6.7.917.167 7.45.167 15.5S6.7 30.083 14.75 30.083 29.333 23.55 29.333 15.5 22.8.917 14.75.917Zm0 5.833a5.11 5.11 0 0 1 5.104 5.104 5.11 5.11 0 0 1-5.104 5.104 5.11 5.11 0 0 1-5.104-5.104A5.11 5.11 0 0 1 14.75 6.75Zm0 20.416c-2.96 0-6.46-1.195-8.954-4.2a14.506 14.506 0 0 1 17.908 0c-2.494 3.005-5.994 4.2-8.954 4.2Z"
      />
    </Svg>
  );
}