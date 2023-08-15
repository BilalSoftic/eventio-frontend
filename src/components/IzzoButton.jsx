import { StyleSheet, Text, TouchableOpacity } from 'react-native';
const IzzoButton = (props) => {
  const { title, submitRegistration } = props;
  return (
    <TouchableOpacity style={styles.submitBtn} onPress={submitRegistration}>
      <Text style={styles.submitBtnText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submitBtn: {
    backgroundColor: '#841584',
    height: 50,
    width: 250,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 7,
  },
  submitBtnText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});
export default IzzoButton;

{
  /*       <View style={styles.submitBtn}>
        <Button
          onPress={submitRegistration}
          title="Submit"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View> */
}
