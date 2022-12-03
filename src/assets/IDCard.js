import Svg, { Path, Rect } from "react-native-svg";

export default function IDCard({ backgroundColor }) {
  return (
    <Svg width="98" height="94" viewBox="0 0 98 94" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect
        x="0.536133"
        width="96.9283"
        height="94"
        rx="47"
        fill={backgroundColor}
        fill-opacity="0.1"
      />
      <Path
        d="M34.1265 33.5527C31.7819 33.5527 29.8506 35.484 29.8506 37.8287V57.783C29.8506 60.1277 31.7819 62.059 34.1265 62.059H65.4834C67.828 62.059 69.7593 60.1277 69.7593 57.783V37.8287C69.7593 35.484 67.828 33.5527 65.4834 33.5527H34.1265ZM34.1265 36.4034H65.4834C66.2901 36.4034 66.9087 37.0219 66.9087 37.8287V57.783C66.9087 58.5898 66.2901 59.2084 65.4834 59.2084H34.1265C33.3198 59.2084 32.7012 58.5898 32.7012 57.783V37.8287C32.7012 37.0219 33.3198 36.4034 34.1265 36.4034ZM42.6784 39.254C39.5427 39.254 36.9771 41.8195 36.9771 44.9552C36.9771 46.5416 37.657 47.9726 38.7146 49.0088C37.7444 49.6635 36.9491 50.5455 36.3978 51.578C35.8465 52.6104 35.5561 53.762 35.5518 54.9324H38.4025C38.4025 52.555 40.301 50.6565 42.6784 50.6565C45.0558 50.6565 46.9543 52.555 46.9543 54.9324H49.805C49.8007 53.762 49.5103 52.6104 48.959 51.578C48.4077 50.5455 47.6124 49.6635 46.6422 49.0088C47.6998 47.9726 48.3797 46.543 48.3797 44.9552C48.3797 41.8195 45.8141 39.254 42.6784 39.254ZM52.6556 40.6793V43.5299H64.0581V40.6793H52.6556ZM42.6784 42.1046C44.2705 42.1046 45.529 43.3632 45.529 44.9552C45.529 46.5473 44.2705 47.8059 42.6784 47.8059C41.0863 47.8059 39.8278 46.5473 39.8278 44.9552C39.8278 43.3632 41.0863 42.1046 42.6784 42.1046ZM52.6556 46.3805V49.2312H64.0581V46.3805H52.6556ZM52.6556 52.0818V54.9324H59.7822V52.0818H52.6556Z"
        fill="#246BFD"
      />
    </Svg>
  );
}
