import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './HorizontalScrollComponentStyle';

const HeartIcon = React.memo(({ iconName }) => (
  <Icon name={iconName} style={styles.heartIcon} />
));
export default HeartIcon;
