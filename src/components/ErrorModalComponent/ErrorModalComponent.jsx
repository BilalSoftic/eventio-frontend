import { useEffect } from 'react';
import { View, Text, Modal } from 'react-native';

const ErrorModalComponent = ({ isError, errorMessage, closeModal }) => {
  useEffect(() => {
    let timeoutId;
    if (isError) {
      timeoutId = setTimeout(closeModal, 3000); // Hide modal after 3 seconds
    }
    return () => clearTimeout(timeoutId); // Clear timeout on component unmount
  }, [isError]);

  return (
    <Modal visible={isError} animationType='fade' transparent>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <View
          style={{
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
            width: '80%',
            height: '15%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 20, padding: 5, textAlign: 'center' }}>
            {errorMessage}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default ErrorModalComponent;
