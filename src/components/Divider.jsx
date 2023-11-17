import { View, Text, StyleSheet } from 'react-native';

function Divider(props) {
  const { text } = props;
  return (
    <View style={styles.containerStyle}>
      <View style={styles.lineStyle} />
      <Text style={styles.textStyle}>{text}</Text>
      <View style={styles.lineStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    padding: 5,
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineStyle: { flex: 3, padding: 0.5, backgroundColor: '#EAEAEA' },
  textStyle: { fontSize: 16, marginHorizontal: 10, color: '#707070' },
});

export default Divider;
