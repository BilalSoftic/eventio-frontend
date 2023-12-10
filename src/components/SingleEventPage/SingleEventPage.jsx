import { View, Text, Image, StyleSheet } from 'react-native';

const SingleEventPage = () => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.backgroundImageContainerStyle}>
        <Image
          source={require('../../../assets/horizontalScrollImages/image-1.png')}
          style={styles.backgroundImageStyle}
        />
      </View>
      <View style={styles.informationContainerStyle}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'column',
  },
  backgroundImageContainerStyle: {
    width: '100%',
    height: '45%',
  },
  backgroundImageStyle: {
    width: '100%',
    height: '100%',
  },
  informationContainerStyle: {
    height: '60%',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
  },
});
export default SingleEventPage;
