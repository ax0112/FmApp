import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import Category from '@/pages/Category';
import Detail from '@/pages/Detail';
import {Platform, StatusBar, StyleSheet} from 'react-native';

//类型别名 用于约束泛型类型
export type RootStackParamList = {
  BottomTabs: {
    screen?: string;
  };
  Category: undefined;
  Detail: {
    id: number;
  };
};
export type RootStackNavigation = NativeStackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

class Navigator extends React.Component<any, any> {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerMode: 'float',
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerTitleAlign: 'center',
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            headerBackTitleVisible: false,
            headerTintColor: '#333',
            headerStyle: {
              ...Platform.select({
                android: {
                  elevation: 0,
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  headerStatusBarHeight: StatusBar.currentHeight,
                },
              }),
            },
          }}>
          <Stack.Screen
            name="BottomTabs"
            options={{headerTitle: '首页'}}
            component={BottomTabs}
          />
          <Stack.Screen
            name="Detail"
            options={{headerTitle: '详情页'}}
            component={Detail}
          />
          <Stack.Screen
            name="Category"
            options={{headerTitle: '分类'}}
            component={Category}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
// const Stack = createNativeStackNavigator();
//
// function Navigator() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Detail" component={Detail} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
export default Navigator;
