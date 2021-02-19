import React from 'react';
import {View, Text} from 'react-native';
import {Marker} from 'react-native-maps';
import styles from './styles';

const AirbnbMarker = (props) => {
  const {coordinate, price, onPress, isSelected} = props;
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View style={isSelected ? styles.infoSelected : styles.info}>
        <Text style={isSelected ? styles.infoTextSelected : styles.infoText}>${price}</Text>
      </View>
    </Marker>
  );
};

export default AirbnbMarker;
