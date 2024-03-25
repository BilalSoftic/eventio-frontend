import { TouchableOpacity, Image, View } from 'react-native';
import styles from './IconButtonComponentStyle';

// Map of image names to require statements
const images = {
  facebook: require('../../../assets/img/facebook.png'),
  google: require('../../../assets/img/google.png'),
  // Add other images here
};

const IconButtonComponent = ({ imageName, onPress }) => {
  const imageSource = images[imageName];

  return (
    <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
      <View style={styles.imageContainer}>
        {imageSource && <Image style={styles.image} source={imageSource} />}
      </View>
    </TouchableOpacity>
  );
};

export default IconButtonComponent;
