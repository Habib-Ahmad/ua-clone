import Svg, { Path, Rect } from "react-native-svg";

export default function Rating() {
  return (
    <Svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect x="0.787598" width="52.2124" height="52.2124" rx="26.1062" fill="#eeeeee" />
      <Path
        d="M37 23.24L29.81 22.62L27 16L24.19 22.63L17 23.24L22.46 27.97L20.82 35L27 31.27L33.18 35L31.55 27.97L37 23.24ZM27 29.4V20.1L28.71 24.14L33.09 24.52L29.77 27.4L30.77 31.68L27 29.4Z"
        fill="black"
      />
    </Svg>
  );
}
