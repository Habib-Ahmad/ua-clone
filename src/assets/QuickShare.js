import Svg, { Path } from "react-native-svg";

export default function QuickShare({ width, height }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M14.4375 13.1833L18.375 9.24585L14.4375 5.30835"
        stroke="black"
        stroke-width="1.3125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15.75 18.4333H3.28125C3.1072 18.4333 2.94028 18.3642 2.81721 18.2411C2.69414 18.1181 2.625 17.9511 2.625 17.7771V7.93335"
        stroke="black"
        stroke-width="1.3125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.15234 15.1521C6.59025 13.4617 7.577 11.9646 8.95775 10.8956C10.3385 9.82665 12.0351 9.24638 13.7812 9.24585H18.375"
        stroke="black"
        stroke-width="1.3125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
