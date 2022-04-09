import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import Home from './screens/Home';

export default function App() {

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
      //let currentLocation = [longit, latit];
      let currentLocation = {longitude: longit, latitude: latit};
      setLocation(currentLocation);
    })();
  }, []);
  console.log(location)

  return (
    <View>
      {/* <Home /> */}
      <MapView 
        style = { styles.map }
        provider = { PROVIDER_GOOGLE }
        showsUserLocation = { true }
        // initialRegion={{
        //   latitude: location.latitude, 
        //   longitude: location.longitude,
        //   latitudeDelta: 5,
        //   longitudeDelta: 5
        // }}
      >
        <Marker 
          coordinate = {{ latitude: 40.7053, longitude: -74.0139 }}
          pinColor = '#4C02DE'
        >
          <Callout>
            <Text>{ location.latitude }</Text>
            <Text>{ location.longitude }</Text>
          </Callout>
        </Marker>
      </MapView> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: Dimensions.get('window').height,
  }
});
