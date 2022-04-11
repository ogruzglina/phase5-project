import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default function Map({ chargers, navigation }) {
  const [location, setLocation] = useState({longitude: 0, latitude: 0});
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let longit = location.coords.longitude;
      let latit = location.coords.latitude;
      let currentLocation = {longitude: longit, latitude: latit};

      setLocation(currentLocation);
    })();
  }, []);
  console.log(location)

  return (
    <View>
      <MapView 
        style = { styles.map }
        provider = { PROVIDER_GOOGLE }
        showsUserLocation = { true }
        followUserLocation = { true }
        zoomEnabled = { true } 
        initialRegion={{
          latitude: location.latitude, 
          longitude: location.longitude,
          latitudeDelta: 85,
          longitudeDelta: 85
        }}
      >
          {/* { chargers.map((charger, index) => {
            let marker = <Marker 
                key={index} 
                title={charger.name} 
                coordinate={{latitude: charger.latitude, longitude: charger.longitude}} 
                pinColor = '#4C02DE'
            />
            console.log(marker);
            return marker;
          })} */}
        <Marker 
          coordinate = {{ latitude: 40.7053, longitude: -74.0139 }}
          pinColor = '#4C02DE'
        >
          <Callout onPress = { () => navigation.navigate('ChargerDetails') }>
            <Text>{ location.latitude }</Text>
            <Text>{ location.longitude }</Text>
          </Callout>
        </Marker>
      </MapView> 
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get('window').height,
  }
});
