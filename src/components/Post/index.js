import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Post = (props) => {
  const {data} = props;
  const navigation = useNavigation();
  const goToPostPage = () => {
    navigation.navigate('Post', {postId: data.id});
  };
  return (
    <Pressable onPress={goToPostPage} style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: data.image,
        }}
      />
      <Text style={styles.bedrooms}>
        {data.bed} bed {data.bedroom} bedroom
      </Text>
      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
        {data.type}. {data.title}
      </Text>
      {/* Old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${data.oldPrice}</Text>
        <Text style={styles.price}> ${data.newPrice} </Text>/ night
      </Text>
      {/* Total price */}
      <Text style={styles.totalPrice}>${data.totalPrice} total</Text>
    </Pressable>
  );
};

export default Post;
