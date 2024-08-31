import React from 'react';
import Svg, { Path } from 'react-native-svg';

const DownloadIcon = ({ width = 22, height = 22, fill = 'black' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.75 0C10.9489 0 11.1397 0.0790177 11.2803 0.21967C11.421 0.360322 11.5 0.551088 11.5 0.75V11.723L13.18 9.762C13.2441 9.68715 13.3223 9.62565 13.4101 9.58102C13.498 9.53639 13.5938 9.50949 13.692 9.50188C13.7903 9.49427 13.889 9.50608 13.9827 9.53664C14.0764 9.5672 14.1631 9.61592 14.238 9.68C14.3129 9.74409 14.3744 9.82229 14.419 9.91014C14.4636 9.99799 14.4905 10.0938 14.4981 10.192C14.5057 10.2903 14.4939 10.389 14.4634 10.4827C14.4328 10.5764 14.3841 10.6631 14.32 10.738L11.32 14.238C11.2496 14.3203 11.1622 14.3864 11.0638 14.4318C10.9654 14.4771 10.8583 14.5006 10.75 14.5006C10.6417 14.5006 10.5346 14.4771 10.4362 14.4318C10.3378 14.3864 10.2504 14.3203 10.18 14.238L7.18 10.738C7.11592 10.6631 7.0672 10.5764 7.03664 10.4827C7.00608 10.389 6.99427 10.2903 7.00188 10.192C7.0095 10.0938 7.03639 9.99799 7.08102 9.91014C7.12565 9.82229 7.18715 9.74409 7.262 9.68C7.33685 9.61592 7.4236 9.5672 7.51728 9.53664C7.61096 9.50608 7.70974 9.49427 7.80798 9.50188C7.90623 9.50949 8.00201 9.53639 8.08986 9.58102C8.17771 9.62565 8.25591 9.68715 8.32 9.762L10 11.722V0.75C10 0.551088 10.079 0.360322 10.2197 0.21967C10.3603 0.0790177 10.5511 0 10.75 0ZM5.746 7.002C5.94491 7.00094 6.1361 7.07894 6.2775 7.21884C6.4189 7.35874 6.49894 7.54909 6.5 7.748C6.50106 7.94691 6.42306 8.1381 6.28316 8.2795C6.14326 8.4209 5.95291 8.50094 5.754 8.502C4.661 8.508 3.886 8.536 3.297 8.644C2.731 8.749 2.402 8.916 2.159 9.159C1.882 9.436 1.702 9.825 1.603 10.559C1.502 11.314 1.5 12.315 1.5 13.75V14.75C1.5 16.186 1.502 17.187 1.603 17.942C1.702 18.676 1.883 19.064 2.159 19.342C2.436 19.618 2.824 19.798 3.559 19.897C4.313 19.999 5.315 20 6.75 20H14.75C16.185 20 17.186 19.999 17.942 19.897C18.676 19.798 19.064 19.618 19.341 19.341C19.618 19.064 19.798 18.676 19.897 17.942C19.998 17.187 20 16.186 20 14.75V13.75C20 12.315 19.998 11.314 19.897 10.558C19.798 9.825 19.617 9.436 19.341 9.159C19.097 8.916 18.769 8.749 18.203 8.644C17.614 8.536 16.839 8.508 15.746 8.502C15.6475 8.50147 15.5501 8.48155 15.4593 8.44338C15.3685 8.4052 15.2861 8.34952 15.2168 8.2795C15.1476 8.20949 15.0928 8.12651 15.0556 8.03532C15.0184 7.94412 14.9995 7.84649 15 7.748C15.0005 7.64951 15.0204 7.55209 15.0586 7.46129C15.0968 7.3705 15.1525 7.28811 15.2225 7.21884C15.2925 7.14957 15.3755 7.09477 15.4667 7.05756C15.5579 7.02035 15.6555 7.00147 15.754 7.002C16.836 7.008 17.737 7.034 18.474 7.169C19.232 7.309 19.877 7.574 20.402 8.099C21.004 8.7 21.262 9.459 21.384 10.359C21.5 11.225 21.5 12.328 21.5 13.695V14.805C21.5 16.173 21.5 17.275 21.384 18.142C21.262 19.042 21.004 19.8 20.402 20.402C19.8 21.004 19.042 21.262 18.142 21.384C17.275 21.5 16.172 21.5 14.805 21.5H6.695C5.328 21.5 4.225 21.5 3.358 21.384C2.458 21.263 1.7 21.004 1.098 20.402C0.496 19.8 0.238 19.042 0.117 18.142C-1.49012e-08 17.275 0 16.172 0 14.805V13.695C0 12.328 -1.49012e-08 11.225 0.117 10.358C0.237 9.458 0.497 8.7 1.098 8.098C1.623 7.574 2.268 7.308 3.026 7.169C3.763 7.034 4.664 7.008 5.746 7.002Z"
        fill={fill}
      />
    </Svg>
  );
};

export default DownloadIcon;
