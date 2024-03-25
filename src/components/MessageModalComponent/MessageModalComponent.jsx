import { useEffect } from 'react';
import { View, Text, Modal } from 'react-native';

const MessageModalComponent = ({ isVisible, message, closeModal }) => {
  useEffect(() => {
    let timeoutId;
    if (isVisible) {
      timeoutId = setTimeout(closeModal, 2000); // Hide modal
    }
    return () => clearTimeout(timeoutId); // Clear timeout on component unmount
  }, [isVisible]);

  return (
    <Modal visible={isVisible} animationType='fade' transparent>
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
            {message}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default MessageModalComponent;
