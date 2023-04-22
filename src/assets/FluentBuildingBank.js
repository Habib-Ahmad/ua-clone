import Svg, { Path, Rect } from "react-native-svg";
import { colors } from "../utils";

export default function FluentBuildingBank({ width, height, type }) {
  return (
    <>
      {type === "bank" ? (
        <Svg
          width={width}
          height={height}
          viewBox="0 0 98 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Rect
            x="0.535889"
            width="96.9283"
            height="94"
            rx="47"
            fill={colors.primaryLight}
            fill-opacity="0.1"
          />
          <Path
            d="M51.2289 28.9316C50.8595 28.6558 50.4109 28.5068 49.9499 28.5068C49.4888 28.5068 49.0402 28.6558 48.6708 28.9316L33.5195 40.2418C32.2367 41.1988 32.9142 43.2371 34.5135 43.2371H65.3871C66.9874 43.2371 67.664 41.1988 66.3821 40.2418L51.2289 28.9316ZM49.9499 38.0096C49.4458 38.0096 48.9624 37.8094 48.606 37.453C48.2495 37.0965 48.0493 36.6131 48.0493 36.1091C48.0493 35.605 48.2495 35.1216 48.606 34.7652C48.9624 34.4087 49.4458 34.2085 49.9499 34.2085C50.4539 34.2085 50.9373 34.4087 51.2937 34.7652C51.6502 35.1216 51.8504 35.605 51.8504 36.1091C51.8504 36.6131 51.6502 37.0965 51.2937 37.453C50.9373 37.8094 50.4539 38.0096 49.9499 38.0096ZM32.8448 61.0548C32.8447 60.3996 32.9737 59.7507 33.2243 59.1453C33.475 58.5399 33.8425 57.9898 34.3057 57.5265C34.769 57.0631 35.319 56.6955 35.9244 56.4448C36.5297 56.194 37.1786 56.0649 37.8338 56.0649H62.0659C64.8217 56.0649 67.0549 58.2981 67.0549 61.0539V62.4793C67.0549 63.135 66.5227 63.6662 65.867 63.6662H34.0327C33.8768 63.6663 33.7223 63.6357 33.5782 63.5761C33.4341 63.5165 33.3031 63.4291 33.1928 63.3189C33.0825 63.2086 32.995 63.0778 32.9353 62.9337C32.8756 62.7896 32.8448 62.6352 32.8448 62.4793V61.0539V61.0548ZM40.4471 54.1643H36.646V45.1367H40.4471V54.1643ZM44.2482 45.1367V54.1643H48.0493V45.1367H44.2482ZM51.8504 45.1367V54.1643H55.6515V45.1367H51.8504ZM59.4526 45.1367V54.1643H63.2537V45.1367H59.4526Z"
            fill="#246BFD"
          />
        </Svg>
      ) : (
        <Svg
          width={width}
          height={height}
          viewBox="0 0 52 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Rect width="51.5576" height="50" rx="25" fill={colors.primaryLight} fill-opacity="0.1" />
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.0792 13V27.5587H29.126C28.101 26.0858 27.5068 24.3352 27.5068 22.4572C27.5068 17.4507 31.7289 13.3506 37.0792 13Z"
            fill="#2F88FC"
          />
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.0775 16.2278V27.5596H29.8002C28.8624 26.4132 28.3188 25.0508 28.3188 23.5891C28.3188 19.6924 32.1819 16.501 37.0775 16.2278Z"
            fill="#2F7BEF"
          />
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.0764 19.6577V27.7856H30.3264C29.4554 26.9632 28.9504 25.9856 28.9504 24.9367C28.9504 22.1424 32.5344 19.8539 37.0764 19.6577Z"
            fill="#2F6FE3"
          />
          <Path
            d="M34.3975 25.5232C36.0521 26.5627 37.1965 28.4147 36.5711 30.2659C35.122 34.5553 30.8357 38.0005 26.0559 38.0005C20.1626 38.0005 15.4779 33.5892 15.1856 27.8283C14.9106 22.4064 14.9944 19.2079 15.0993 16.3585C15.1123 16.0066 15.1756 15.6064 15.3527 15.3021C15.7583 14.6054 16.6842 14.7719 17.4036 15.1359C21.9525 17.4372 29.6376 22.5326 34.3975 25.5232Z"
            fill="#2A017B"
          />
        </Svg>
      )}
    </>
  );
}
