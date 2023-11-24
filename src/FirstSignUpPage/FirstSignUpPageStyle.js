import { StyleSheet } from 'react-native';
const FirstSignUpPageStyle = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  backgroundImageStyle: {
    minWidth: '150%',
    position: 'absolute',
    top: 0,
  },
  interactiveContainerStyle: {
    width: '100%',
    paddingTop: 25,
    paddingBottom: 15,
    paddingHorizontal: 25,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFFFFF',
  },
  mainHeaderTextStyle: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  pageNumberingContainer: {
    marginBottom: 20,
  },

  inputsContainerStyle: {
    flex: 1,
    gap: 5,
    marginBottom: 15,
  },
  buttonContainerStyle: {
    marginBottom: 15,
  },
  dividerContainerStyle: { marginBottom: 5 },

  socialsContainerStyle: {
    flexDirection: 'column',
  },
  socialButtonsContainerStyle: {
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialsTextStyle: {
    alignSelf: 'center',
  },
  socialsLinkStyle: {
    color: '#004972',
  },
});

export default FirstSignUpPageStyle;
