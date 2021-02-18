import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const GuestsScreen = (props) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  return (
    <View>
      {/* Row 1: Adults */}
      <View style={styles.row}>
        {/* Titles */}
        <View>
          <Text style={styles.title}>Adults</Text>
          <Text style={styles.subTitle}>Ages 13 or above</Text>
        </View>
        {/* Buttons with value */}
        <View style={styles.countColumn}>
          {/* - */}
          <Pressable
            onPress={() => setAdults(Math.max(0, adults - 1))}
            style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Text style={styles.number}>{adults}</Text>
          <Pressable
            onPress={() => setAdults(adults + 1)}
            style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
      {/* Row 2: Children */}
      <View style={styles.row}>
        {/* Titles */}
        <View>
          <Text style={styles.title}>Children</Text>
          <Text style={styles.subTitle}>Ages 2 - 12 or above</Text>
        </View>
        {/* Buttons with value */}
        <View style={styles.countColumn}>
          {/* - */}
          <Pressable
            onPress={() => setChildren(Math.max(0, children - 1))}
            style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Text style={styles.number}>{children}</Text>
          <Pressable
            onPress={() => setChildren(children + 1)}
            style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
      {/* Row 3: Infants */}
      <View style={styles.row}>
        {/* Titles */}
        <View>
          <Text style={styles.title}>Infants</Text>
          <Text style={styles.subTitle}>Under 2</Text>
        </View>
        {/* Buttons with value */}
        <View style={styles.countColumn}>
          {/* - */}
          <Pressable
            onPress={() => setInfants(Math.max(0, infants - 1))}
            style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Text style={styles.number}>{infants}</Text>
          <Pressable
            onPress={() => setInfants(infants + 1)}
            style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default GuestsScreen;
