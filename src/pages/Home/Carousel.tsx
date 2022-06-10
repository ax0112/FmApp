import React from 'react';
import Carousel, {
  AdditionalParallaxProps,
  Pagination,
  ParallaxImage,
} from 'react-native-snap-carousel';
import {hp, viewportWidth, wp} from '@/utils/index';
import {StyleSheet, View} from 'react-native';
import {ICarousel} from '@/models/home';
import {RootState} from '@/models/index';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({home}: RootState) => ({
  data: home.carousel,
  activeCarouselIndex: home.activeCarouselIndex,
});
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {}

export class MyCarousel extends React.Component<IProps> {
  onSnapToItem = (index: number) => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/setState',
      payload: {
        activeCarouselIndex: index,
      },
    });
  };
  _renderItem = (
    {item}: {item: ICarousel},
    parallaxProps?: AdditionalParallaxProps,
  ) => {
    let image = item.image;
    return (
      <ParallaxImage
        source={{uri: image[0]}}
        style={styles.image}
        containerStyle={styles.imageContainer}
        showSpinner
        spinnerColor="rgba(0,0,0,0.35)"
        {...parallaxProps}
      />
    );
  };
  get pagination() {
    const {data, activeCarouselIndex} = this.props;
    return (
      <View style={styles.paginationWrapper}>
        <Pagination
          containerStyle={styles.paginationContainer}
          dotsLength={data.length}
          dotStyle={styles.dot}
          activeDotIndex={activeCarouselIndex}
          dotContainerStyle={styles.dotContainer}
          inactiveDotScale={0.8}
          inactiveDotOpacity={0.4}
        />
      </View>
    );
  }
  render() {
    const {data} = this.props;
    return (
      <View>
        <Carousel
          data={data}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages
          loop
          autoplay
          onSnapToItem={this.onSnapToItem}
        />
        {this.pagination}
      </View>
    );
  }
}

const sliderWidth = viewportWidth;
// const imgWidth = wp(90);
export const imgHeight = hp(26);
const itemWidth = wp(90) + wp(2) * 2;
const styles = StyleSheet.create({
  imageContainer: {
    width: itemWidth,
    height: imgHeight,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 10,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  paginationWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    top: -30,
    paddingHorizontal: 3,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  dotContainer: {
    marginHorizontal: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
});
export default connector(MyCarousel);
