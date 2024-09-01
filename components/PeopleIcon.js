import React from "react";
import Svg, { Path, Rect, G, Defs, ClipPath,Circle,Ellipse } from "react-native-svg";

export default function PeopleIcon({ style }) {
  return (
    <Svg
      width="23"
      height="25"
      viewBox="0 0 23 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="11.5" cy="5.5" r="5.5" fill="#81C966" />
      <Ellipse cx="11.5" cy="19.5" rx="11.5" ry="5.5" fill="#81C966" />
    </Svg>
  );
}
