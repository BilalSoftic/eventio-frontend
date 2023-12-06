import { View, Text, TouchableOpacity } from 'react-native';
import styles from './DatePickerComponentStyle';
import { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const DatePickerComponent = ({
  borderColor,
  isDatePickerVisible,
  setIsDatePickerVisible,
}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
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
};

export default DatePickerComponent;
