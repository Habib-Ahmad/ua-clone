import Svg, { Path } from "react-native-svg";
import { colors } from "../utils";

export default function Profile({ color }) {
  const active = color === "#246BFD";

  return (
    <Svg width={28} height={28} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M14.186 12.681a2.133 2.133 0 0 0-.385 0 5.157 5.157 0 0 1-4.982-5.168c0-2.858 2.31-5.18 5.18-5.18a5.183 5.183 0 0 1 5.18 5.18c-.011 2.8-2.216 5.075-4.993 5.168ZM8.353 16.987c-2.823 1.89-2.823 4.97 0 6.848 3.208 2.147 8.47 2.147 11.678 0 2.824-1.89 2.824-4.97 0-6.848-3.197-2.135-8.458-2.135-11.678 0Z"
        stroke={color}
        fill={active ? color : colors.bg}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
