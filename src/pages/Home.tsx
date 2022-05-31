import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/index';

const mapStateToProps = ({home, loading}: RootState) => ({
  num: home.num,
  loading: loading.effects['home/asyncAdd'],
});
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  navigation: RootStackNavigation;
}
// function Home() {
//   return (
//     <View>
//       <Text>Home</Text>
//     </View>
//   );
// }
class Home extends React.Component<IProps> {
  onPress = () => {
    const {navigation} = this.props;
    navigation.navigate('Detail', {
      id: 100,
    });
  };

  add = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/add',
      payload: {
        num: 10,
      },
    });
  };
  asyncAdd = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/asyncAdd',
      payload: {
        num: 2,
      },
    });
  };

  render() {
    const {num, loading} = this.props;
    return (
      <View>
        <Text>首页{num}</Text>
        <Text>{loading ? '正在努力加载' : ''}</Text>
        <Button title="加" onPress={this.add} />
        <Button title="异步加" onPress={this.asyncAdd} />
        <Button title={'跳转到详情页'} onPress={this.onPress} />
      </View>
    );
  }
}

export default connector(Home);
