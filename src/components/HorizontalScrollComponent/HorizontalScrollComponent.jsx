import { View, Text, ScrollView, Image } from 'react-native';
import styles from './HorizontalScrollComponentStyle';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  {
    id: 1,
    image: require('../../../assets/horizontalScrollImages/image-1.png'),
  },
  {
    id: 2,
    image: require('../../../assets/horizontalScrollImages/image-2.png'),
  },
  {
    id: 3,
    image: require('../../../assets/horizontalScrollImages/image-3.png'),
  },
  {
    id: 4,
    image: require('../../../assets/horizontalScrollImages/image-4.png'),
  },
  {
    id: 5,
    image: require('../../../assets/horizontalScrollImages/image-5.png'),
  },
];

const HorizontalScrollComponent = ({ title }) => {
  return (
    <View style={styles.horizontalScrollContainerStyle}>
      <View style={styles.HorizontalScrollHeaderStyle}>
        <Text style={styles.horizontalScrollHeading}>{title}</Text>
      </View>
      <ScrollView style={styles.horizontalScrollStyle} horizontal={true}>
        {data.map(({ id, image }) => (
          <View style={styles.containerStyle} key={id}>
            <View style={styles.backgroundImageContainerStyle}>
              <Image style={styles.backgroundImageStyle} source={image} />
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
