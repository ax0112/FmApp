import React from 'react';
import {
  getFocusedRouteNameFromRoute,
  RouteProp,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Listen from '@/pages/Listen';
import Found from '@/pages/Found';
import Account from '@/pages/Account';
import {RootStackNavigation, RootStackParamList} from '@/navigator/index';
import Iconfont from '@/assets/iconfont';
import HomeTabs from '@/navigator/HomeTabs';
export type BottomTabsParamList = {
  HomeTabs: undefined;
  Listen: undefined;
  Found: undefined;
  Account: undefined;
};
type Route = RouteProp<RootStackParamList>;

interface IProps {
  navigation: RootStackNavigation;
  route: Route;
}

function getHeaderTitle(RouteName: string) {
  switch (RouteName) {
    case 'Home':
      return '';
    case 'Listen':
      return '收听';
    case 'Found':
      return '发现';
    case 'Account':
      return '我的';
    default:
      return '';
  }
}

const Tab = createBottomTabNavigator<BottomTabsParamList>();

class BottomTabs extends React.Component<IProps> {
  setOptions = () => {
    const {navigation, route} = this.props;
    const RouteName = getFocusedRouteNameFromRoute(route) ?? 'HomeTabs';
    if (RouteName === 'HomeTabs') {
      navigation.setOptions({
        headerTransparent: true,
        headerTitle: '',
      });
    } else {
      navigation.setOptions({
        headerTransparent: false,
        headerTitle: getHeaderTitle(RouteName),
      });
    }
  };
  componentDidMount() {
    this.setOptions();
  }

  componentDidUpdate() {
    this.setOptions();
  }

  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#F86442',
          headerShown: false,
        }}>
        <Tab.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{
            tabBarLabel: '首页',
            tabBarIcon: ({color, size}) => (
              <Iconfont name="icon-home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Listen"
          component={Listen}
          options={{
            tabBarLabel: '收听',
            tabBarIcon: ({color, size}) => (
              <Iconfont name="icon-listing-content" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Found"
          component={Found}
          options={{
            tabBarLabel: '发现',
            tabBarIcon: ({color, size}) => (
              <Iconfont name="icon-Exportservices" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: '我的',
            tabBarIcon: ({color, size}) => (
              <Iconfont name="icon-usercenter" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default BottomTabs;
