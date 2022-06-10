import React from 'react';
import {
  MaterialTopTabBar,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import LinearAnimatedGradientTransition from 'react-native-linear-animated-gradient-transition';
import {RootState} from '@/models/index';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({home}: RootState) => {
  return {
    gradientVisible: home.gradientVisible,
    linearColors: home.carousel.length
      ? home.carousel[home.activeCarouselIndex].colors
      : ['#ccc', '#e2e2e2'],
  };
};
const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

type IProps = MaterialTopTabBarProps & ModelState;

class TopTabBarWrapper extends React.Component<IProps> {
  get linearGradient() {
    const {gradientVisible, linearColors} = this.props;
    if (gradientVisible) {
      return (
        <LinearAnimatedGradientTransition
          colors={linearColors}
          style={styles.gradient}
        />
      );
    }
    return null;
  }
  goCategory = () => {
    const {navigation} = this.props;
    navigation.navigate('Category');
  };
  render() {
    const {gradientVisible, ...restProps} = this.props;
    let textStyle = styles.text;
    if (gradientVisible) {
      textStyle = styles.whiteText;
    }
    return (
      <View style={styles.container}>
        {this.linearGradient}
        <View style={styles.TopBarView}>
          <MaterialTopTabBar {...restProps} />
          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={this.goCategory}>
            <Text style={textStyle}>分类</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabBottom}>
          <TouchableOpacity style={styles.searchBtn}>
            <Text style={textStyle}>搜索按钮</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.historyBtn}>
            <Text style={textStyle}>历史记录</Text>
          </TouchableOpacity>
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
  gradient: {
    ...StyleSheet.absoluteFillObject,
    height: 260,
  },
  TopBarView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryBtn: {
    paddingHorizontal: 10,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: '#ccc',
  },
  tabBottom: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBtn: {
    flex: 1,
    paddingLeft: 12,
    height: 30,
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(0,0,0,.1)',
  },
  historyBtn: {
    marginLeft: 24,
  },
  text: {
    color: '#333',
  },
  whiteText: {
    color: '#fff',
  },
});
export default connector(TopTabBarWrapper);
