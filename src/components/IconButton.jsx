import { TouchableOpacity, StyleSheet, Image } from 'react-native';
const IconButton = (props) => {
  const { label } = props;

  return (
    <TouchableOpacity style={styles.button}>
      <Image
        source={
          label === 'google'
            ? require(`../../assets/img/google.png`)
            : 'facebook'
            ? require(`../../assets/img/facebook.png`)
            : null
        }
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {},
  icon: { flex: 1 },
});
export default IconButton;
