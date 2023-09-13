import { StyleSheet } from 'react-native';
import { Button, ButtonText } from '@gluestack-ui/themed';
const EventioButton = (props) => {
  const { title, submitRegistration } = props;
  return (
    <Button size="lg" style={styles.submitBtn} onPress={submitRegistration}>
      <ButtonText style={styles.submitBtnText}>Add</ButtonText>
    </Button>
  );
};

const styles = StyleSheet.create({
  submitBtn: {
    backgroundColor: '#841584',
    height: 50,
    width: 250,
    marginTop: 30,
    padding: 0,
    alignSelf: 'center',
    borderRadius: 7,
  },
  submitBtnText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '400',
    textTransform: 'uppercase',
    padding: 10,
    margin: 0,
  },
});
export default EventioButton;
