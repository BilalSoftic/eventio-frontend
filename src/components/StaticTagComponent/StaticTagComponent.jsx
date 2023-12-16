import { ScrollView, Text, View } from 'react-native';
import Data from './Data';
import styles from './StaticTagComponentStyle';
const StaticTagComponent = () => {
  return (
    <ScrollView horizontal={true}>
      {Data.map(({ id, tag }) => (
        <View key={id} style={styles.tag}>
          <Text style={styles.text}>{tag}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
export default StaticTagComponent;
