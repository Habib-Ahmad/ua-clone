import Svg, { Path } from "react-native-svg";
import { colors } from "../utils";

export default function Home({ color }) {
  const active = color === "#246BFD";

  return (
    <Svg width={28} height={28} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11.748 3.29 3.662 9.765c-.91.723-1.493 2.252-1.295 3.395l1.552 9.287c.28 1.657 1.867 2.998 3.547 2.998h13.066c1.669 0 3.267-1.353 3.547-2.998l1.552-9.287c.186-1.143-.397-2.671-1.295-3.395L16.25 3.302c-1.249-1.004-3.267-1.004-4.504-.012Z"
        stroke={color}
        fill={active ? color : colors.bg}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 21v-3.5"
        stroke={active ? colors.bg : color}
        fill={active ? color : colors.bg}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
