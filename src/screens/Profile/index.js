import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import { Auth } from 'aws-amplify';

const Profile = () => {
    const logout = () => {
        Auth.signOut();
    }
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={logout}>
        <Text>Profile</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
