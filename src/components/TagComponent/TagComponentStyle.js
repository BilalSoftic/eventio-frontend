import { StyleSheet } from 'react-native';

const TagComponentStyle = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    columnGap: 5,
    rowGap: 10,
  },
  tag: {
    padding: 5,
    borderRadius: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
  },
});
export default TagComponentStyle;
