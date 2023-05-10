import Svg, { Path, Rect } from "react-native-svg";

export default function BuildingSmall() {
  return (
    <Svg width={51} height={49.459} xmlns="http://www.w3.org/2000/svg" fill="none">
      <Rect width={51} height={49.459} fill="#417FFE" fillOpacity={0.1} rx={24.73} />
      <Path
        fill="#246BFD"
        d="M26.673 15.223a1.125 1.125 0 0 0-1.346 0l-7.972 5.951c-.675.504-.319 1.576.523 1.576h16.245c.842 0 1.198-1.072.523-1.576l-7.973-5.95ZM26 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-9 12.126a2.624 2.624 0 0 1 2.625-2.626h12.75A2.625 2.625 0 0 1 35 32.125v.75c0 .345-.28.624-.625.624h-16.75a.623.623 0 0 1-.625-.624v-.75Zm4-3.626h-2v-4.75h2v4.75Zm2-4.75v4.75h2v-4.75h-2Zm4 0v4.75h2v-4.75h-2Zm4 0v4.75h2v-4.75h-2Z"
      />
    </Svg>
  );
}
