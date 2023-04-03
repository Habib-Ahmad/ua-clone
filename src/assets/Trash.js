import Svg, { Path } from "react-native-svg";

export default function Trash() {
  return (
    <Svg width={15} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2.673 15.861c-.48 0-.893-.17-1.235-.513a1.685 1.685 0 0 1-.514-1.236V2.74H.049V.99h4.374V.115H9.67V.99h4.374v1.75h-.874v11.372c0 .481-.171.893-.514 1.236a1.687 1.687 0 0 1-1.236.513H2.673ZM11.421 2.74H2.673v11.372h8.748V2.74Zm-6.998 9.622h1.75V4.49h-1.75v7.873Zm3.499 0h1.75V4.49h-1.75v7.873ZM2.673 2.74v11.372V2.74Z"
        fill="#000"
      />
    </Svg>
  );
}
