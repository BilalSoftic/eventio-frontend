import { TouchableOpacity, Image } from 'react-native';
import styles from './IconButtonComponentStyle';
const IconButtonComponent = (props) => {
  const { label } = props;

  const iconPath = '../../../assets/img/';
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Image
        source={
          label === 'google'
            ? require(iconPath + `google.png`)
            : 'facebook'
            ? require(iconPath + `facebook.png`)
            : null
        }
        style={styles.iconStyle}
      />
    </TouchableOpacity>
  );
};

export default IconButtonComponent;
