import { TouchableOpacity, StyleSheet, Image } from 'react-native';
const IconButton = (props) => {
  const { name } = props;
  return (
    <TouchableOpacity style={styles.button}>
      <Image
        style={styles.icon}
        source={require(`../../assets/img/facebook.png`)}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {},
  icon: { flex: 1 },
});
export default IconButton;
