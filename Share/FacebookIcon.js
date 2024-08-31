import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const FacebookIcon = ({ width, height }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" fill="none">
    <Circle cx="16" cy="16" r="16" fill="#F1EFF2" />
    <Path 
      d="M26 16.1066C26 10.5278 21.52 6 16 6C10.48 6 6 10.5278 6 16.1066C6 20.9982 9.44 25.0712 14 26.0111V19.1386H12V16.1066H14V13.58C14 11.6294 15.57 10.0427 17.5 10.0427H20V13.0746H18C17.45 13.0746 17 13.5294 17 14.0853V16.1066H20V19.1386H17V26.1627C22.05 25.6574 26 21.352 26 16.1066Z" 
      fill="#0000FF" 
    />
  </Svg>
);

export default FacebookIcon;
