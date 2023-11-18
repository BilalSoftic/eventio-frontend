import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { forwardRef, useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const DatePickerComponent = forwardRef(
  (DatePicker = (props, ref) => {
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
      ...styles.buttonStyle,
      borderColor: borderColor,
    };
    const buttonTextStyle = {
      ...styles.buttonTextStyle,
      color: selectedDate ? 'black' : 'rgba(70, 70, 70, 0.5)',
    };
    return (
      <View>
        <TouchableOpacity style={styles.buttonStyle} onPress={showDatePicker}>
          <Text style={buttonTextStyle}>{buttonText}</Text>
          <View style={styles.iconContainerStyle}>
            <Icon name="calendar" style={styles.iconStyle} />
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
  })
);
const styles = StyleSheet.create({
  buttonStyle: {
    padding: 12,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#D9D9D9',
  },
  buttonTextStyle: {
    flex: 1,
    fontSize: 16,
    textTransform: 'capitalize',
  },
  iconContainerStyle: {
    width: 22,
    height: 22,
    marginLeft: 15,
    borderRadius: 3,
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 49, 72, 0.1)',
  },
  iconStyle: {
    fontSize: 15,
    textAlign: 'center',
    alignSelf: 'center',
    color: '#0C6A9F',
  },
});
export default DatePickerComponent;
