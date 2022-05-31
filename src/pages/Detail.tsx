import React from 'react';
import {Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '@/navigator/index';
// function Detail() {
//   return (
//     <View>
//       <Text>Home</Text>
//     </View>
//   );
// }
interface IProps {
  route: RouteProp<RootStackParamList, 'Detail'>;
}

class Detail extends React.Component<IProps> {
  render() {
    const {route} = this.props;
    return (
      <View>
        <Text>{route.params.id}</Text>
      </View>
    );
  }
}

export default Detail;
