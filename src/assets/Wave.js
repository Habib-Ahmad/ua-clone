import { Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function Wave({ fill }) {
  return (
    <Svg height={100} width={Dimensions.get("screen").width + 2} viewBox="0 0 1440 320">
      <Path
        fill={fill}
        d="m0 256 48-32c48-32 144-96 240-117.3 96-21.7 192 .3 288 32 96 32.3 192 74.3 288 96 96 21.3 192 21.3 288-10.7s192-96 240-128l48-32V0H0Z"
      />
    </Svg>
  );
}
