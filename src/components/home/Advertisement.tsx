import React, {useRef} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

function Advertisement(): JSX.Element {
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
        data={data}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        autoplay={true}
        autoplayInterval={3000}
        loop={true}
        enableSnap={true}
        showsPagination={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 30, 
    marginHorizontal: 50, 
  }, 
  carouselItem: {
    borderRadius: 5,
  },
  carouselImage: { 
    width: 277, 
    height: 80,
    borderRadius: 10 
  },
});

export default Advertisement;