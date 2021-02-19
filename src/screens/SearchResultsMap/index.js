import React, {useState, useEffect, useRef} from 'react';
import {View, Text, FlatList} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './styles';
import AirbnbMarker from '../../components/AirbnbMarker';
import PostCarouselItem from '../../components/PostCarouselItem';

import places from '../../../assets/data/feed';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const SearchResultsMap = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const width = useWindowDimensions().width;
  const flatlist = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChanged = useRef(({viewableItems}) => {
    console.log(viewableItems);
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });
  useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return;
    }
    const index = places.findIndex((place) => place.id === selectedPlaceId);
    flatlist.current.scrollToIndex({index});
  }, [selectedPlaceId]);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {places.map((place) => (
          <AirbnbMarker
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>
      <View style={styles.postContainer}>
        <FlatList
          ref={flatlist}
          data={places}
          renderItem={({item}) => <PostCarouselItem data={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment="center"
          decelerationRate="fast"
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
