import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/index';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IGuess} from '@/models/home';
import Iconfont from '@/assets/iconfont';

const mapStateToProps = ({home}: RootState) => {
  return {
    guess: home.guess,
  };
};
const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

class Guess extends React.Component<ModelState> {
  componentDidMount() {
    this.fetch();
  }
  fetch = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/fetchGuess',
    });
  };

  renderItem = ({item}: {item: IGuess}) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity activeOpacity={0.8}>
          <Image source={{uri: item.image}} style={styles.itemImage} />
          <Text numberOfLines={2} style={styles.itemInfo}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    const {guess} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <View style={styles.headFlex}>
            <Iconfont name={'icon-favorites'} color="#F86442" />
            <Text style={styles.headTitle}>猜你喜欢</Text>
          </View>
          <View style={styles.headFlex}>
            <Text style={styles.headMore}>更多</Text>
            <Iconfont name={'icon-arrow-right'} color="#333" />
          </View>
        </View>
        <FlatList
          style={styles.list}
          numColumns={3}
          data={guess}
          renderItem={this.renderItem}
        />
        <TouchableOpacity style={styles.changeGuess} onPress={this.fetch}>
          <Iconfont name={'icon-exchangerate'} color="#F86442" />
          <Text style={styles.changeGuessText}>换一批</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  list: {
    padding: 5,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 10,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 10,
  },
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
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headFlex: {
    flexDirection: 'row',
  },
  headTitle: {
    marginLeft: 5,
    alignItems: 'center',
    color: '#333',
  },
  headMore: {
    marginRight: 5,
    alignItems: 'center',
    color: '#333',
  },
  changeGuess: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  changeGuessText: {
    marginLeft: 5,
    height: 20,
    lineHeight: 20,
    color: '#6F6F6F',
  },
});
export default connector(Guess);
