import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IGuess} from '@/models/home';
interface IProps {
  data: IGuess;
  onPress: (data: IGuess) => void;
}

class GuessItems extends React.Component<IProps> {
  onPress = () => {
    const {data, onPress} = this.props;
    if (typeof onPress === 'function') {
      onPress(data);
    }
  };
  render() {
    const {data} = this.props;
    return (
      <View style={styles.item}>
        <TouchableOpacity activeOpacity={0.8} onPress={this.onPress}>
          <Image source={{uri: data.image}} style={styles.itemImage} />
          <Text numberOfLines={2} style={styles.itemInfo}>
            {data.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 5,
  },
  itemInfo: {
    textAlign: 'center',
  },
  itemImage: {
    width: '100%',
    height: 90,
    borderRadius: 8,
    marginBottom: 10,
  },
});
export default GuessItems;
