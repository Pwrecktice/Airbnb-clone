import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  title: {
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#8d8d8d',
  },
  countColumn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    marginHorizontal: 20,
    fontSize: 16,
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#474747',
  },
  pressable: {},
});
export default styles;
