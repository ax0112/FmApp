import React from 'react';
import {
  MaterialTopTabBar,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import {StyleSheet, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

interface IProps extends MaterialTopTabBarProps {}
class TopTabBarWrapper extends React.Component<IProps> {
  render() {
    const {props} = this;
    return (
      <View style={styles.container}>
        <View>
          <MaterialTopTabBar {...props} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: getStatusBarHeight(),
  },
});
export default TopTabBarWrapper;
