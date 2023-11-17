import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const DatePickerComponent = (props) => {
  const { borderColor } = props;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };
  const buttonText = selectedDate
    ? selectedDate.toLocaleDateString('bs-BA', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : 'date of birth';
  const buttonStyle = {
    ...styles.button,
    borderColor: borderColor,
  };
  const buttonTextStyle = {
    ...styles.buttonText,
    color: selectedDate ? 'black' : 'rgba(70, 70, 70, 0.5)',
  };
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={showDatePicker}>
        <Text style={buttonTextStyle}>{buttonText}</Text>
        <View style={styles.iconContainer}>
          <Icon name="calendar" style={styles.icon} />
        </View>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    marginTop: 5,
    padding: 12,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#D9D9D9',
  },
  buttonText: {
    flex: 1,
    fontSize: 16,
    textTransform: 'capitalize',
  },
  iconContainer: {
    width: 22,
    height: 22,
    marginLeft: 15,
    borderRadius: 3,
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 49, 72, 0.1)',
  },
  icon: {
    fontSize: 15,
    textAlign: 'center',
    alignSelf: 'center',
    color: '#0C6A9F',
  },
});
export default DatePickerComponent;
