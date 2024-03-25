import React from 'react';
import { View, Image, Pressable } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import styles from './EventioCarouselStyle';

const ImagePath = '../../../assets/img/';

const EventioCarousel = () => {
  const data = [
    { imageSource: require(ImagePath + 'CarouselImage-1.png') },
    { imageSource: require(ImagePath + 'CarouselImage-2.png') },
    { imageSource: require(ImagePath + 'CarouselImage-3.png') },
  ];

  const renderTouchableOpacity = (item, index) => (
    <Pressable
      key={index}
      style={styles.child}
      onPress={() => console.log(index)}
    >
      <Image style={styles.image} source={item.imageSource} />
    </Pressable>
  );

  return (
    <SwiperFlatList
      autoplay
      autoplayLoop
      autoplayDelay={5}
      autoplayLoopKeepAnimation
      showPagination
      renderAll
      paginationStyleItemActive={{
        backgroundColor: '#004972',
        borderWidth: 1,
        borderColor: 'white',
      }}
      paginationStyleItemInactive={{ backgroundColor: 'white' }}
    >
      {data.map((item, index) => renderTouchableOpacity(item, index))}
    </SwiperFlatList>
  );
};

export default EventioCarousel;
