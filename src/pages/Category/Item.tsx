import {ICategory} from '@/models/category';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {viewportWidth} from '@/utils/index';

interface IProps {
  data: ICategory;
}

const parentWidth = viewportWidth - 10;
const ItemWidth = parentWidth / 4;

class Item extends React.Component<IProps> {
  render() {
    const {data} = this.props;
    return (
      <View key={data.id} style={styles.itemView}>
        <View style={styles.Items}>
          <Text>{data.name}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  itemView: {
    width: ItemWidth,
    height: 50,
  },
  Items: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
});
export default Item;
