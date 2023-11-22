import { View, Text } from 'react-native';
import styles from './DividerComponentStyle';

function DividerComponent(props) {
  const { text } = props;
  return (
    <View style={styles.containerStyle}>
      <View style={styles.lineStyle} />
      <Text style={styles.textStyle}>{text}</Text>
      <View style={styles.lineStyle} />
    </View>
  );
}

export default DividerComponent;
