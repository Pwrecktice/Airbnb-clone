import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Post = (props) => {
  const {data} = props;
  const width = useWindowDimensions().width;
  const navigation = useNavigation();
  const goToPostPage = () => {
    navigation.navigate('Post', {postId: data.id});
  };
  return (
    <Pressable
      onPress={goToPostPage}
      style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={{
            uri: data.image,
          }}
        />
        <View style={{flex: 1, marginHorizontal: 10}}>
          <Text style={styles.bedrooms}>
            {data.bed} bed {data.bedroom} bedroom
          </Text>
          {/* Type & Description */}
          <Text style={styles.description} numberOfLines={2}>
            {data.type}. {data.title}
          </Text>
          {/* Old price & new price */}
          <Text style={styles.prices}>
            <Text style={styles.price}> ${data.newPrice} </Text>/ night
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Post;
