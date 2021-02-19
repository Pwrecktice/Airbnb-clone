import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  info: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 1,
  },
  infoSelected: {
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 1,
  },
  infoText: {
    fontWeight: 'bold',
  },
  infoTextSelected: {
    fontWeight: 'bold',
    color: 'white',
  }
});

export default styles;
