import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from './HorizontalScrollComponentStyle';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  {
    id: 1,
    image: require('../../../assets/horizontalScrollImages/image-1.png'),
    liked: false,
  },
  {
    id: 2,
    image: require('../../../assets/horizontalScrollImages/image-2.png'),
    liked: false,
  },
  {
    id: 3,
    image: require('../../../assets/horizontalScrollImages/image-3.png'),
    liked: false,
  },
  {
    id: 4,
    image: require('../../../assets/horizontalScrollImages/image-4.png'),
    liked: false,
  },
  {
    id: 5,
    image: require('../../../assets/horizontalScrollImages/image-5.png'),
    liked: false,
  },
];

const HorizontalScrollComponent = ({ title }) => {
  const [Data, setData] = useState(data);

  const handleLikeButton = (id) => {
    const updatedData = Data.map((item) =>
      item.id === id ? { ...item, liked: !item.liked } : item
    );
    setData(updatedData);
  };

  return (
    <View style={styles.horizontalScrollContainerStyle}>
      <View style={styles.HorizontalScrollHeaderStyle}>
        <Text style={styles.horizontalScrollHeading}>{title}</Text>
      </View>
      <ScrollView style={styles.horizontalScrollStyle} horizontal={true}>
        {Data.map(({ id, image, liked }) => (
          <View style={styles.containerStyle} key={id}>
            <View style={styles.backgroundImageContainerStyle}>
              <Image style={styles.backgroundImageStyle} source={image} />
              <TouchableOpacity
                style={styles.heartButton}
                onPress={() => handleLikeButton(id)}
              >
                <Icon
                  name={liked ? 'heart' : 'heart-o'}
                  style={styles.heartIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.informationContainerStyle}>
              <Text style={styles.dateStyle}>Uto, 24.Okt u 19.00h</Text>
              <Text style={styles.titleStyle}>
                Kakva ti je zena takav ti je zivot
              </Text>
              <View style={styles.locationContainerStyle}>
                <Text style={styles.locationStyle}>
                  <Icon name={'map-pin'} style={styles.iconStyle} /> Bosanski
                  Kulturni centar
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HorizontalScrollComponent;
