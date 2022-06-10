import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/index';
import MyCarousel, {imgHeight} from '@/pages/Home/Carousel';
import Guess from '@/pages/Home/Guess';
import ChannelItem from '@/pages/Home/ChannelItem';
import {IChannel} from '@/models/home';

const mapStateToProps = ({home, loading}: RootState) => ({
  carousel: home.carousel,
  channels: home.channels,
  hasMore: home.pagination.hasMore,
  gradientVisible: home.gradientVisible,
  loading: loading.effects['home/fetchChannels'],
});
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  navigation: RootStackNavigation;
}
interface IState {
  refreshing: boolean;
}
// function Index() {
//   return (
//     <View>
//       <Text>Index</Text>
//     </View>
//   );
// }
class Index extends React.Component<IProps, IState> {
  state = {
    refreshing: false,
  };
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/fetchCarousels',
    });
    dispatch({
      type: 'home/fetchChannels',
    });
  }
  channelInfo = (data: IChannel) => {
    console.log('channel', data);
  };

  renderItem = ({item}: ListRenderItemInfo<IChannel>) => {
    return <ChannelItem data={item} onPress={this.channelInfo} />;
  };
  get header() {
    return (
      <View>
        <MyCarousel />
        <View>
          <Guess />
        </View>
      </View>
    );
  }
  get footer() {
    const {hasMore, loading, channels} = this.props;
    if (!hasMore) {
      return (
        <View style={styles.end}>
          <Text>---到底了，换点别的看看吧---</Text>
        </View>
      );
    }
    if (loading && hasMore && channels.length > 0) {
      return (
        <View style={styles.loading}>
          <Text>正在加载中...</Text>
        </View>
      );
    }
  }
  //上拉刷新
  onRefresh = () => {
    this.setState({
      refreshing: true,
    });
    const {dispatch} = this.props;
    dispatch({
      type: 'home/fetchChannels',
      callback: () => {
        this.setState({
          refreshing: false,
        });
      },
    });
  };
  //加载更多
  onEndReached = () => {
    const {dispatch, loading, hasMore} = this.props;
    if (loading || !hasMore) {
      return;
    }
    dispatch({
      type: 'home/fetchChannels',
      payload: {
        loadMore: true,
      },
    });
  };
  //列表为空
  get empty() {
    const {loading} = this.props;
    if (loading) {
      return;
    }
    return (
      <View style={styles.empty}>
        <Text>暂无数据</Text>
      </View>
    );
  }

  onScroll = ({nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = nativeEvent.contentOffset.y;
    let newGradientVisible = offsetY < imgHeight;
    const {dispatch, gradientVisible} = this.props;
    if (gradientVisible !== newGradientVisible) {
      dispatch({
        type: 'home/setState',
        payload: {
          gradientVisible: newGradientVisible,
        },
      });
    }
  };
  render() {
    const {channels} = this.props;
    const {refreshing} = this.state;
    return (
      <FlatList
        ListHeaderComponent={this.header}
        ListHeaderComponentStyle={styles.header}
        ListFooterComponent={this.footer}
        ListEmptyComponent={this.empty}
        style={styles.flatList}
        data={channels}
        renderItem={this.renderItem}
        onRefresh={this.onRefresh}
        refreshing={refreshing}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={0.2}
        onScroll={this.onScroll}
      />
    );
  }
}
const styles = StyleSheet.create({
  flatList: {
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 15,
  },
  end: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  loading: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  empty: {
    alignItems: 'center',
    paddingVertical: 100,
  },
});
export default connector(Index);
