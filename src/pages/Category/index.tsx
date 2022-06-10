import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {RootState} from '@/models/index';
import {connect, ConnectedProps} from 'react-redux';
import {ICategory} from '@/models/category';
import _ from 'lodash';
import Item from '@/pages/Category/Item';
import {RootStackNavigation} from '@/navigator/index';
import HeaderRightBtn from '@/pages/Category/HeaderRightBtn';
const mapStateProps = ({category}: RootState) => {
  return {
    myCategories: category.myCategories,
    categories: category.categories,
  };
};
const connector = connect(mapStateProps);

type ModelState = ConnectedProps<typeof connector>;
interface IProps extends ModelState {
  navigation: RootStackNavigation;
}
interface IState {
  myCategories: ICategory[];
}

class Category extends React.Component<IProps, IState> {
  state = {
    myCategories: this.props.myCategories,
  };
  constructor(props: IProps) {
    super(props);
    props.navigation.setOptions({
      headerRight: () => <HeaderRightBtn onSubmit={this.onSubmit} />,
    });
  }
  onSubmit = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'category/toggle',
    });
  };
  renderItem = (item: ICategory, index: number) => {
    return <Item data={item} />;
  };
  render() {
    const {categories} = this.props;
    const {myCategories} = this.state;
    const classifyGroup = _.groupBy(categories, item => item.classify);
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.classifyName}>我的分类</Text>
        <View style={styles.classifyView}>
          {myCategories.map(this.renderItem)}
        </View>
        <View>
          {Object.keys(classifyGroup).map(classify => {
            return (
              <View key={classify}>
                <Text style={styles.classifyName}>{classify}</Text>
                <View style={styles.classifyView}>
                  {classifyGroup[classify].map(this.renderItem)}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f6f6',
  },
  classifyName: {
    fontSize: 16,
    marginTop: 14,
    marginBottom: 8,
    marginLeft: 10,
  },
  classifyView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  },
});
export default connector(Category);
