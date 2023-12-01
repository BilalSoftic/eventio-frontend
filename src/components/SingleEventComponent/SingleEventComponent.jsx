import { View, Text, Image } from 'react-native';
import styles from './SingleEventComponentStyle';

const SingleEventComponent = () => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.backgroundImageContainerStyle}>
        <Image
          style={styles.backgroundImageStyle}
          source={require('../../../assets/img/CarouselImage-1.png')}
        />
      </View>
      <View style={styles.informationContainerStyle}>
        <Text>Uto, 24.Okt u 19.00h</Text>
        <Text>Kakava ti je zena takav ti je zivot</Text>
        <Text>'Ikona' Bosanski Kulturni centar</Text>
      </View>
    </View>
  );
};
export default SingleEventComponent;
