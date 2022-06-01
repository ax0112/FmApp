/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconExchangerate from './IconExchangerate';
import IconArrowRight from './IconArrowRight';
import IconArrowLeft from './IconArrowLeft';
import IconExportservices from './IconExportservices';
import IconAdd from './IconAdd';
import IconLoading from './IconLoading';
import IconListingContent from './IconListingContent';
import IconReduce from './IconReduce';
import IconScanning from './IconScanning';
import IconService from './IconService';
import IconHome from './IconHome';
import IconAccount from './IconAccount';
import IconFavorites from './IconFavorites';
import IconSearch from './IconSearch';
import IconUsercenter from './IconUsercenter';
export { default as IconExchangerate } from './IconExchangerate';
export { default as IconArrowRight } from './IconArrowRight';
export { default as IconArrowLeft } from './IconArrowLeft';
export { default as IconExportservices } from './IconExportservices';
export { default as IconAdd } from './IconAdd';
export { default as IconLoading } from './IconLoading';
export { default as IconListingContent } from './IconListingContent';
export { default as IconReduce } from './IconReduce';
export { default as IconScanning } from './IconScanning';
export { default as IconService } from './IconService';
export { default as IconHome } from './IconHome';
export { default as IconAccount } from './IconAccount';
export { default as IconFavorites } from './IconFavorites';
export { default as IconSearch } from './IconSearch';
export { default as IconUsercenter } from './IconUsercenter';

export type IconNames = 'icon-exchangerate' | 'icon-arrow-right' | 'icon-arrow-left' | 'icon-Exportservices' | 'icon-add' | 'icon-loading' | 'icon-listing-content' | 'icon-reduce' | 'icon-scanning' | 'icon-service' | 'icon-home' | 'icon-account' | 'icon-favorites' | 'icon-search' | 'icon-usercenter';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-exchangerate':
      return <IconExchangerate key="1" {...rest} />;
    case 'icon-arrow-right':
      return <IconArrowRight key="2" {...rest} />;
    case 'icon-arrow-left':
      return <IconArrowLeft key="3" {...rest} />;
    case 'icon-Exportservices':
      return <IconExportservices key="4" {...rest} />;
    case 'icon-add':
      return <IconAdd key="5" {...rest} />;
    case 'icon-loading':
      return <IconLoading key="6" {...rest} />;
    case 'icon-listing-content':
      return <IconListingContent key="7" {...rest} />;
    case 'icon-reduce':
      return <IconReduce key="8" {...rest} />;
    case 'icon-scanning':
      return <IconScanning key="9" {...rest} />;
    case 'icon-service':
      return <IconService key="10" {...rest} />;
    case 'icon-home':
      return <IconHome key="11" {...rest} />;
    case 'icon-account':
      return <IconAccount key="12" {...rest} />;
    case 'icon-favorites':
      return <IconFavorites key="13" {...rest} />;
    case 'icon-search':
      return <IconSearch key="14" {...rest} />;
    case 'icon-usercenter':
      return <IconUsercenter key="15" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
