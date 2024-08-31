import React from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkIcon = ({ width = 24, height = 24, stroke = 'black' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9.00001 14.9999L15 8.99994M11 5.99994L11.463 5.46394C12.4008 4.52627 13.6727 3.99954 14.9989 3.99963C16.325 3.99973 17.5968 4.52663 18.5345 5.46444C19.4722 6.40224 19.9989 7.67413 19.9988 9.00029C19.9987 10.3265 19.4718 11.5983 18.534 12.5359L18 12.9999M13 17.9999L12.603 18.5339C11.654 19.4716 10.3736 19.9975 9.03951 19.9975C7.70538 19.9975 6.42502 19.4716 5.47601 18.5339C5.00813 18.0717 4.63665 17.5211 4.38311 16.9142C4.12958 16.3074 3.99902 15.6562 3.99902 14.9984C3.99902 14.3407 4.12958 13.6895 4.38311 13.0826C4.63665 12.4757 5.00813 11.9252 5.47601 11.4629L6.00001 10.9999"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default LinkIcon;
