import React from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import Index from '@/pages/Home/Index';
import {View} from 'react-native';
import TopTabBarWrapper from '@/pages/views/TopTabBarWrapper';

const Tab = createMaterialTopTabNavigator();

class HomeTabs extends React.Component<any, any> {
  renderTabBar = (props: MaterialTopTabBarProps) => {
    return <TopTabBarWrapper {...props} />;
  };
  render() {
    return (
      <Tab.Navigator
        tabBar={this.renderTabBar}
        screenOptions={{
          lazy: true,
          tabBarStyle: {elevation: 0},
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
          tabBarActiveTintColor: '#F86442',
          tabBarInactiveTintColor: '#333',
        }}>
        <Tab.Screen
          name="Index"
          component={Index}
          options={{tabBarLabel: '推荐'}}
        />
        <Tab.Screen name="Home2" component={Index} />
        <Tab.Screen name="Home3" component={Index} />
      </Tab.Navigator>
    );
  }
}

export default HomeTabs;
