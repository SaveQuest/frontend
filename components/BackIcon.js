import React from 'react';
import Svg, { Path } from 'react-native-svg';

const BackIcon = ({ width = 24, height = 24, color = '#000' }) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M15 19L8 12L15 5" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export default BackIcon;
