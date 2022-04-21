import { Text, View, Dimensions } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { FontAwesome5 } from '@expo/vector-icons';
//import { mapStyle } from "../constants/mapStyle";

 const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]

export default function Map({ chargers, navigation }) {
  const [location, setLocation] = useState({ longitude: 0, latitude: 0 });
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

  return (
    <View>
      <MapView 
        customMapStyle = { mapStyle }
        style = {{ height: Dimensions.get('window').height }}
        provider = { PROVIDER_GOOGLE }
        showsUserLocation = { true }
        followUserLocation = { true }
        zoomEnabled = { true } 
        initialRegion = {{
          latitude: location.latitude, 
          longitude: location.longitude,
          latitudeDelta: 60.2,
          longitudeDelta: 60
        }}
      >{/*charging-station or bolt*/}
        { chargers.map((charger, index) => 
            <Marker 
              key={ index } 
              title={ charger.name } 
              coordinate={{ latitude: charger.latitude, longitude: charger.longitude }} 
            >
              <FontAwesome5 name = 'plug' size = { 35 } color= { charger.status ? "#20BE94" : "red" } /> 
              <Callout onPress = { () => navigation.navigate(
                  'ChargerDetails', 
                  {screen: 'ChargerDetails', params: { charger: charger }}
              )}>
                <View style = {{ width: 200, backgroundColor: '#999', borderRadius: 5}}>
                  <Text style = {{ textAlign: 'center' }}>{ charger.charger_type }</Text>
                  <Text style = {{ textAlign: 'center' }}>{ charger.address }</Text>
                  <Text style = {{ textAlign: 'center' }}>{ charger.status ? "Status: available" : "Status: unavailible" }</Text>
                </View>
              </Callout>
            </Marker>
        )}
      </MapView> 
    </View>
  );
}