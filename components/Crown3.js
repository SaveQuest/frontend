import React from "react";
import Svg, { Path, Rect, G, Defs, ClipPath } from "react-native-svg";

export default function Crown3({ style }) {
  return (
    <Svg
      style={style}
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M9.375 30L5.625 9.375L15.9375 18.75L22.5 7.5L29.0625 18.75L39.375 9.375L35.625 30H9.375ZM35.625 35.625C35.625 36.75 34.875 37.5 33.75 37.5H11.25C10.125 37.5 9.375 36.75 9.375 35.625V33.75H35.625V35.625Z"
        fill="#AC835B"
      />
    </Svg>
  );
}
