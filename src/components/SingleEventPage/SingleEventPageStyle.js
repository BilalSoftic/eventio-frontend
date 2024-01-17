import { StyleSheet } from 'react-native';

const SingleEventPageStyle = StyleSheet.create({
  loadingContainer: { flex: 1 },
  errorContainer: { flex: 1 },
  containerStyle: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'column',
  },
  backgroundImageContainerStyle: {
    width: '100%',
    height: '45%',
  },
  backgroundImageStyle: {
    width: '100%',
    height: '100%',
  },
  eventInformationContainerStyle: {
    height: '60%',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  headerStyle: {
    marginBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  venueContainerStyle: {
    marginBottom: 15,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  venueImageStyle: { height: 40, width: 40, borderRadius: 20 },
  venueNameStyle: { fontSize: 20, fontWeight: '500' },

  tagsContainerStyle: { marginBottom: 10 },
  informationContainerStyle: {
    paddingVertical: 10,
    gap: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(80, 80, 80, 0.3)',
  },
  informationStyle: {
    gap: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  informationIconStyle: { fontSize: 20, color: '#898989' },
  informationTextStyle: { fontSize: 16 },
  detailsContainerStyle: {
    paddingVertical: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(80, 80, 80, 0.3)',
  },
  detailsHeaderStyle: { fontSize: 20, marginBottom: 10, fontWeight: '500' },
  detailsScrollStyle: { height: '20%' },
  detailsStyle: { fontSize: 16, lineHeight: 22, opacity: 0.5 },
  socialsContainerStyle: {
    gap: 5,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default SingleEventPageStyle;
