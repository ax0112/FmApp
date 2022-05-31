import React from 'react';
import Navigator from '@/navigator/index';
import {Provider} from 'react-redux';
import store from '@/config/dva';

export default class extends React.Component<any, any> {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
