import Svg, { Path } from "react-native-svg";
import { colors } from "../utils";

export default function Avatar() {
  return (
    <Svg width={25} height={25} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12.8198 13.5098C12.8198 16.1379 9.21566 16.4417 6.50541 16.4417L6.31146 16.4415C4.58471 16.4373 0.189453 16.3283 0.189453 13.4938C0.189453 10.9193 3.64872 10.5753 6.33835 10.5623L6.69935 10.5621C8.42599 10.5663 12.8198 10.6753 12.8198 13.5098ZM6.50541 11.7579C3.10782 11.7579 1.38551 12.3416 1.38551 13.4938C1.38551 14.6564 3.10782 15.2456 6.50541 15.2456C9.9022 15.2456 11.6237 14.662 11.6237 13.5098C11.6237 12.3472 9.9022 11.7579 6.50541 11.7579ZM6.50541 0.597656C8.8401 0.597656 10.7386 2.49699 10.7386 4.83168C10.7386 7.16638 8.8401 9.06491 6.50541 9.06491H6.47989C4.14998 9.05774 2.26261 7.15761 2.27056 4.82929C2.27056 2.49699 4.16992 0.597656 6.50541 0.597656ZM6.50541 1.7363C4.79824 1.7363 3.40921 3.12452 3.40921 4.83168C3.40365 6.53327 4.7823 7.92069 6.48228 7.92707L6.50541 8.49639V7.92707C8.21178 7.92707 9.59999 6.53805 9.59999 4.83168C9.59999 3.12452 8.21178 1.7363 6.50541 1.7363Z"
        fill={colors.black}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
