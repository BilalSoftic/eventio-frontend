import { StyleSheet, Text, TouchableOpacity } from 'react-native';
const VenueSocialsButtonComponent = ({ socialIconName }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{socialIconName}</Text>
    </TouchableOpacity>
  );
};
export default VenueSocialsButtonComponent;
const styles = StyleSheet.create({
  button: {
    padding: 5,
    marginRight: 5,
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 49, 72, 0.1)',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: '#004972',
    textTransform: 'capitalize',
  },
});
