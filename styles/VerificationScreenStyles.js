import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    marginTop: 45,
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    left: 0,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Pretendard-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontFamily: 'Pretendard-Bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#646464',
    paddingTop: 5,
  },
  input: {
    height: 40,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingHorizontal: 0,
    fontSize: 19,
    color: '#000',
    marginTop: 5,
  },
  idContainer: {
    marginBottom: 30,
  },
  idInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  circleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleText: {
    fontSize: 19,
    color: '#000',
    marginHorizontal: 0.3,
    width: 15,
    textAlign: 'center',
  },
  circleTextGray: {
    fontSize: 19,
    color: '#ccc',
    marginHorizontal: 0.3,
    width: 15,
    textAlign: 'center',
  },
  dash: {
    marginHorizontal: 20,
    fontSize: 20,
    color: '#333',
  },
  underline: {
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 8,
  },
  hiddenInputContainer: {
    flexDirection: 'row',
    position: 'absolute',
    opacity: 0,
  },
  visibleInput: {
    flex: 1,
    height: 40,
    fontSize: 19,
    color: '#000',
    paddingHorizontal: 0,
  },
  phoneInputContainer: {
    marginBottom: 30,
  },
  phoneInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    height: 40,
  },
  phoneAndCarrierContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  carrierSelect: {
    justifyContent: 'center',
    height: 40,
  },
  carrierSelectInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carrierSelectText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'left',
    marginRight: 4,
  },
  phoneInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    color: '#000',
    borderBottomWidth: 0,
    paddingHorizontal: 0,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButton: {
    position: 'absolute', 
    bottom: 45, 
    left: 20,
    right: 20, 
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#389348', 
    alignItems: 'center',
  },
  submitButtonActive: {
    backgroundColor: '#389348',
  },
  submitButtonInactive: {
    backgroundColor: '#E0E0E0',
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Pretendard-Bold',
    textAlign: 'center',
  },
  submitButtonTextActive: {
    color: '#fff',
  },
  submitButtonTextInactive: {
    color: '#A0A0A0',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingBottom: 30,
    height: 425,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalItem: {
    paddingVertical: 25,
  },
  modalItemText: {
    fontSize: 16,
    fontFamily: 'Pretendard-Bold',
  },
});

export default styles;
