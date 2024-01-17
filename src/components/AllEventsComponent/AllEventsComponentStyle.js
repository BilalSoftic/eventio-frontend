import { StyleSheet } from 'react-native';
const AllEventsComponentStyle = StyleSheet.create({
  containerStyle: {
    position: 'relative',
    bottom: 90,
    zIndex: 2,
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  eventContainer: {
    position: 'relative',
    backgroundColor: '#F0FAFF',
    margin: 16,
    borderRadius: 22.92,
  },
  eventImageStyle: {
    height: 384.98,
    borderRadius: 22.92,
  },
  eventDetailsStyle: {
    height: 142,
    width: '100%',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 22.92,
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    shadowColor: '#333333',
    shadowOffset: {
      width: 2.046511650085449,
      height: 2.046511650085449,
    },
    shadowOpacity: 0.12156862765550613,
    shadowRadius: 22.920930862426758,
    elevation: 3,
  },
  eventDateStyle: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 15.73,
    color: '#0C6A9F',
  },
  eventNameStyle: {
    fontSize: 26,
    fontWeight: '600',
    lineHeight: 28,
    color: '#333333',
  },
  eventAddressStyle: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 15.73,
  },
  errorContainer: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default AllEventsComponentStyle;
