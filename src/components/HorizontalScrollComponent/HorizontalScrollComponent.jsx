import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from './HorizontalScrollComponentStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useEffect, useState } from 'react';
import { getUserTags } from '../../../eventio-api';
import { formatDate, formatTime } from '../../../helpers';

const HorizontalScrollComponent = ({}) => {
  const [userTags, setUserTags] = useState([]);
  useEffect(() => {
    getUserTags().then((res) => {
      /*  console.log(JSON.stringify(res.data)); */
      setUserTags(res.data.map((obj) => obj.tag));

      console.log(userTags);
    });
  }, []);

  /*   const handleLikeButton = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, liked: !item.liked } : item
    );
    setData(updatedData);
  }; */

  return (
    <View style={styles.wrapper}>
      {userTags.map((tag) => (
        <View key={tag.id} style={styles.container}>
          <View style={styles.HorizontalScrollHeaderStyle}>
            <Text style={styles.horizontalScrollHeading}>{tag.name}</Text>
          </View>
          <ScrollView horizontal={true}>
            {tag.events.map((event) => (
              <View style={styles.singleEventContainerStyle} key={event.id}>
                <View style={styles.backgroundImageContainerStyle}>
                  {/*
             <Image style={styles.backgroundImageStyle} source={image} />
              <TouchableOpacity
                style={styles.heartButton}
                onPress={() => handleLikeButton(id)}
              >
                <Icon
                  name={liked ? 'heart' : 'heart-o'}
                  style={styles.heartIcon}
                />
              </TouchableOpacity> */}
                </View>
                <View style={styles.informationContainerStyle}>
                  <Text style={styles.dateStyle}>
                    {formatDate(new Date(event.start_date))} u{' '}
                    {formatTime(new Date(event.start_date))}
                  </Text>
                  <Text style={styles.titleStyle}>{event.name}</Text>
                  <View style={styles.locationStyle}>
                    <Icon name={'map-pin'} style={styles.locationIconStyle} />
                    <Text style={styles.locationTextStyle}>
                      {event.address}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      ))}
    </View>
  );
};

export default HorizontalScrollComponent;
