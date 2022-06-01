import React from 'react';
import Carousel, {
  AdditionalParallaxProps,
  // Pagination,
  ParallaxImage,
} from 'react-native-snap-carousel';
import {hp, viewportWidth, wp} from '@/utils/index';
import {StyleSheet, View} from 'react-native';
import {ICarousel} from '@/models/home';

// const data = [
//   'https://s2.loli.net/2022/06/01/oPDm7Wq2S3w6Ta8.jpg',
//   'https://s2.loli.net/2022/06/01/PXcdM3xkYKovEsh.jpg',
//   'https://s2.loli.net/2022/06/01/Ks2gnSDApZCNtTW.jpg',
//   'https://s2.loli.net/2022/06/01/tJIzfKSmoGVqyrg.jpg',
//   'https://s2.loli.net/2022/06/01/ulwtWpIR6YBMHXi.jpg',
//   'https://s2.loli.net/2022/06/01/TbXizWAHoVUDevO.png',
// ];
interface IProps {
  data: ICarousel[];
}

const sliderWidth = viewportWidth;
// const imgWidth = wp(90);
const imgHeight = hp(22);
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
export class MyCarousel extends React.Component<IProps> {
  state = {
    activeSlide: 0,
  };

  onSnapToItem = (index: number) => {
    this.setState({
      activeSlide: index,
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
  // get pagination() {
  // const {data} = this.props;
  // const {activeSlide} = this.state;
  // return (
  //   <View style={styles.paginationWrapper}>
  //     <Pagination
  //       containerStyle={styles.paginationContainer}
  // dotsLength={data.length}
  // dotStyle={styles.dot}
  // activeDotIndex={activeSlide}
  // dotContainerStyle={styles.dotContainer}
  // inactiveDotScale={0.8}
  // inactiveDotOpacity={0.4}
  // />
  // </View>
  // );
  // }
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
        {/*{this.pagination}*/}
      </View>
    );
  }
}

export default MyCarousel;
