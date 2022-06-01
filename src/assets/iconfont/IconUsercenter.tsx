/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconUsercenter: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 128c212.075 0 384 171.925 384 384S724.075 896 512 896 128 724.075 128 512s171.925-384 384-384z m0 64c-176.725 0-320 143.275-320 320 0 91.243 38.187 173.547 99.413 231.85l108.523-129.386a195.861 195.861 0 0 0 60.01 28.053l-117.93 140.651A318.507 318.507 0 0 0 512 832a318.507 318.507 0 0 0 161.237-43.52l-120.17-143.296a195.541 195.541 0 0 0 62.442-25.088L725.1 750.72A319.21 319.21 0 0 0 832 512c0-176.725-143.275-320-320-320z m0 106.667a154.07 154.07 0 0 1 76.373 287.914l-0.64 0.363-0.704 0.405a153.685 153.685 0 0 1-4.928 2.624l5.632-3.029A153.685 153.685 0 0 1 512 606.805a153.643 153.643 0 0 1-58.07-11.306l-0.213-0.086a153.173 153.173 0 0 1-5.653-2.453l5.888 2.56a153.195 153.195 0 0 1-20.97-10.475A154.07 154.07 0 0 1 512 298.667z m0 64a90.07 90.07 0 1 0 0 180.138 90.07 90.07 0 0 0 0-180.138z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconUsercenter.defaultProps = {
  size: 18,
};

IconUsercenter = React.memo ? React.memo(IconUsercenter) : IconUsercenter;

export default IconUsercenter;
