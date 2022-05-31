import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import Detail from '@/pages/Detail';
import {Platform, StyleSheet} from 'react-native';

//类型别名 用于约束泛型类型
export type RootStackParamList = {
  BottomTabs: {
    screen?: string;
  };
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
            headerStyle: {
              ...Platform.select({
                android: {
                  elevation: 0,
                  borderBottomWidth: StyleSheet.hairlineWidth,
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
            options={{headerTitle: '详情页'}}
            name="Detail"
            component={Detail}
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
