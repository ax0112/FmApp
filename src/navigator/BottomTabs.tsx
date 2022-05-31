import React from 'react';
import {
  getFocusedRouteNameFromRoute,
  RouteProp,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Listen from '@/pages/Listen';
import Found from '@/pages/Found';
import Account from '@/pages/Account';
import Home from '@/pages/Home';
import {RootStackNavigation, RootStackParamList} from '@/navigator/index';

export type BottomTabsParamList = {
  Home: undefined;
  Listen: undefined;
  Found: undefined;
  Account: undefined;
};
type Route = RouteProp<RootStackParamList, 'BottomTabs'>;

interface IProps {
  navigation: RootStackNavigation;
  route: Route;
}

function getHeaderTitle(route: Route) {
  const RouteName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  switch (RouteName) {
    case 'Home':
      return '首页';
    case 'Listen':
      return '收听';
    case 'Found':
      return '发现';
    case 'Account':
      return '我的';
    default:
      return '首页';
  }
}

const Tab = createBottomTabNavigator<BottomTabsParamList>();

class BottomTabs extends React.Component<IProps> {
  componentDidUpdate() {
    const {navigation, route} = this.props;
    navigation.setOptions({
      headerTitle: getHeaderTitle(route),
    });
  }

  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#F86442',
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{tabBarLabel: '首页'}}
        />
        <Tab.Screen
          name="Listen"
          component={Listen}
          options={{tabBarLabel: '收听'}}
        />
        <Tab.Screen
          name="Found"
          component={Found}
          options={{tabBarLabel: '发现'}}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{tabBarLabel: '我的'}}
        />
      </Tab.Navigator>
    );
  }
}

export default BottomTabs;
