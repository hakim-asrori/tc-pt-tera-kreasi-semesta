import React, {useRef, useState} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);

function Advertisement(): JSX.Element {
  const [index, setIndex] = useState(0)
  const isCarousel = useRef(null)

  const data = [
    { image: require('../../assets/images/banner.png') },
    { image: require('../../assets/images/banner.png') },
    { image: require('../../assets/images/banner.png') },
  ];

  const renderItem = ({ item }: {item: any}) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.carouselImage} />
    </View>
  );

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        layout='default'
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index=>setIndex(index)}
        autoplay={true}
        autoplayInterval={3000}
        loop={true}
        enableSnap={true}
      />
      <Pagination 
        dotsLength={data.length}
        dotColor='#4A50A4'
        inactiveDotColor='#E6EEF4'
        dotStyle={{ 
          height: 7,
          width: 7,
          marginHorizontal: -5,
         }}
        activeDotIndex={index}
        carouselRef={isCarousel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 30, 
    marginHorizontal: 30, 
  }, 
  carouselItem: {
    borderRadius: 5,
  },
  carouselImage: { 
    width: SLIDER_WIDTH - 60, 
    height: 80,
    borderRadius: 10 
  },
});

export default Advertisement;