import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Index from '@/pages/Home/Index';

const Tab = createMaterialTopTabNavigator();

class HomeTabs extends React.Component<any, any> {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          lazy: true,
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
