import { StyleSheet, ActivityIndicator, View } from 'react-native';
const LoadingComponent = () => {
  return (
    <View style={styles.loadingContainerStyle}>
      <ActivityIndicator size='large' color='#004972' />
    </View>
  );
};
export default LoadingComponent;

const styles = StyleSheet.create({
  loadingContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
});
