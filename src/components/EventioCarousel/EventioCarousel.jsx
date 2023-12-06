import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
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
    <TouchableOpacity key={index} style={styles.child}>
      <Image style={styles.image} source={item.imageSource} />
    </TouchableOpacity>
  );

  return (
    <SwiperFlatList
      autoplay
      autoplayLoop
      autoplayDelay={5}
      autoplayLoopKeepAnimation
      showPagination
      renderAll
      disableGesture
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
