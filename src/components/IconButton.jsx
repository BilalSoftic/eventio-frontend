import { TouchableOpacity, StyleSheet, Image } from 'react-native';
const IconButton = (props) => {
  const { label } = props;

  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Image
        source={
          label === 'google'
            ? require(`../../assets/img/google.png`)
            : 'facebook'
            ? require(`../../assets/img/facebook.png`)
            : null
        }
        style={styles.iconStyle}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  iconStyle: { flex: 1 },
});
export default IconButton;
