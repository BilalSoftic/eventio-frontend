import { View, Text, StyleSheet } from 'react-native';

function Divider(props) {
  const { text } = props;
  return (
    <View style={styles.linesWrapper}>
      <View style={styles.line} />
      <Text style={styles.middleText}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  linesWrapper: {
    padding: 5,
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: { flex: 3, padding: 0.5, backgroundColor: '#EAEAEA' },
  middleText: { fontSize: 16, marginHorizontal: 10, color: '#707070' },
});

export default Divider;
