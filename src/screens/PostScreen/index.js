import React from 'react';
import {View} from 'react-native';
import Post from '../../components/DetailedPost';
import styles from './styles';
import {useRoute} from '@react-navigation/native';

import places from '../../../assets/data/feed';

const PostScreen = (props) => {
  const route = useRoute();
  const post = places.find((place) => place.id === route.params.postId);
  return (
    <View style={styles.container}>
      <Post data={post} />
    </View>
  );
};

export default PostScreen;
