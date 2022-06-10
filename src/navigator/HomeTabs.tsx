import React from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import Index from '@/pages/Home/Index';
import TopTabBarWrapper from '@/pages/views/TopTabBarWrapper';
import {StyleSheet} from 'react-native';
import {RootState} from '@/models/index';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({home}: RootState) => {
  return {
    gradientVisible: home.gradientVisible,
  };
};
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;

const Tab = createMaterialTopTabNavigator();

class HomeTabs extends React.Component<ModelState> {
  renderTabBar = (props: MaterialTopTabBarProps) => {
    return <TopTabBarWrapper {...props} />;
  };
  render() {
    const {gradientVisible} = this.props;
    let InactiveTintColor = '#333';
    let ActiveTintColor = '#F86442';
    if (gradientVisible) {
      InactiveTintColor = '#fff';
      ActiveTintColor = '#000';
    }
    return (
      <Tab.Navigator
        tabBar={this.renderTabBar}
        sceneContainerStyle={styles.sceneContainer}
        screenOptions={{
          lazy: true,
          tabBarStyle: styles.tabBar,
          tabBarScrollEnabled: true,
          tabBarItemStyle: {
            width: 100,
          },
          tabBarIndicatorStyle: {
            height: 4,
            width: 100,
            borderRadius: 2,
            backgroundColor: '#F86442',
          },
          tabBarActiveTintColor: ActiveTintColor,
          tabBarInactiveTintColor: InactiveTintColor,
        }}>
        <Tab.Screen
          name="Index"
          component={Index}
          options={{tabBarLabel: '推荐'}}
        />
        <Tab.Screen
          name="Index2"
          component={Index}
          options={{tabBarLabel: '推荐'}}
        />
      </Tab.Navigator>
    );
  }
}
const styles = StyleSheet.create({
  sceneContainer: {
    backgroundColor: 'transparent',
  },
  tabBar: {
    elevation: 0,
    flex: 1,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
});
export default connector(HomeTabs);
