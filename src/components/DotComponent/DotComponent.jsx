import { View } from 'react-native';
const DotComponent = ({ size, backgroundColor }) => {
  const borderRadius = size / 2;
  return (
    <View
      style={{ height: size, width: size, backgroundColor, borderRadius }}
    ></View>
  );
};

export default DotComponent;
