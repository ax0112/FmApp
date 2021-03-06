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

let IconAccount: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M644.8 581.568l160.64 187.456a64 64 0 0 1-48.597 105.643H267.157a64 64 0 0 1-48.597-105.643l160.661-187.435a253.813 253.813 0 0 0 61.206 26.944l-173.27 202.134h489.686l-173.27-202.134a254.613 254.613 0 0 0 61.227-26.965zM512 149.333c117.824 0 213.333 95.51 213.333 213.334S629.824 576 512 576s-213.333-95.51-213.333-213.333S394.176 149.333 512 149.333z m0 64A149.333 149.333 0 1 0 512 512a149.333 149.333 0 0 0 0-298.667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconAccount.defaultProps = {
  size: 18,
};

IconAccount = React.memo ? React.memo(IconAccount) : IconAccount;

export default IconAccount;
