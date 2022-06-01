import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {IChannel} from '@/models/home';
import Iconfont from '@/assets/iconfont';

interface IProps {
  data: IChannel;
  onPress: (data: IChannel) => void;
}

class ChannelItem extends React.Component<IProps> {
  onPress = () => {
    const {onPress, data} = this.props;
    if (typeof onPress === 'function') {
      onPress(data);
    }
  };
  render() {
    const {data} = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.container}
        onPress={this.onPress}>
        <Image source={{uri: data.image}} style={styles.image} />
        <View style={styles.rightContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {data.title}
          </Text>
          <Text numberOfLines={2} style={styles.remark}>
            {data.remark}
          </Text>
          <View style={styles.bottom}>
            <View style={styles.played}>
              <Iconfont name={'icon-listing-content'} size={14} />
              <Text style={styles.number}>{data.played}</Text>
            </View>
            <View style={styles.playing}>
              <Iconfont name={'icon-account'} size={14} />
              <Text style={styles.listened}>{data.playing}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 15,
    borderRadius: 8,
    backgroundColor: '#dedede',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    marginTop: 2,
    marginBottom: 10,
  },
  remark: {
    marginBottom: 10,
    padding: 4,
    backgroundColor: '#F8F8F8',
  },
  bottom: {
    flexDirection: 'row',
  },
  played: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  playing: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    marginLeft: 5,
  },
  listened: {
    marginLeft: 5,
  },
});
export default ChannelItem;
