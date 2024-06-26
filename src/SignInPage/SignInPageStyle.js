import { StyleSheet } from 'react-native';
const SignInPageStyle = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  backgroundImageStyle: {
    minWidth: '110%',
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  inputsContainerStyle: {
    flex: 1,
    marginBottom: 15,
    gap: 5,
  },
  dividerContainerStyle: { marginBottom: 5 },

  textWrapperStyle: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  forgotPasswordStyle: {
    fontSize: 15,
    textTransform: 'capitalize',
    color: '#004972',
  },
  buttonContainerStyle: {
    marginBottom: 15,
  },
  linesWrapper: {
    padding: 5,
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  socialsContainerStyle: {
    flexDirection: 'column',
  },
  socialButtonsContainerStyle: {
    gap: 20,
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

export default SignInPageStyle;
