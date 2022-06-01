import React from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/index';
import MyCarousel from '@/pages/Home/Carousel';
import Guess from '@/pages/Home/Guess';
import ChannelItem from '@/pages/Home/ChannelItem';
import {IChannel} from '@/models/home';

const mapStateToProps = ({home}: RootState) => ({
  carousel: home.carousel,
  channels: home.channels,
});
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  navigation: RootStackNavigation;
}
// function Index() {
//   return (
//     <View>
//       <Text>Index</Text>
//     </View>
//   );
// }
class Index extends React.Component<IProps> {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/fetchCarousels',
    });
    dispatch({
      type: 'home/fetchChannel',
    });
  }
  onPress = (data: IChannel) => {
    console.log(data);
  };
  renderItem = ({item}: ListRenderItemInfo<IChannel>) => {
    return <ChannelItem data={item} onPress={this.onPress} />;
  };
  get header() {
    const {carousel} = this.props;
    return (
      <View>
        <MyCarousel data={carousel} />
        <Guess />
      </View>
    );
  }
  render() {
    const {channels} = this.props;
    return (
      <FlatList
        ListHeaderComponent={this.header}
        data={channels}
        renderItem={this.renderItem}
      />
    );
  }
}

export default connector(Index);
