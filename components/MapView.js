import * as React from 'react';
import  MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Map(props) {
    let userLocation = props.props ? JSON.parse(props.props) : null;
    console.log("userLocation::", userLocation);
    const [regLatitude, setRegLatitude] = React.useState(20);
    const [regLongitude, setRegLongitude] = React.useState(70);

    setTimeout(() => {
        if(userLocation) {
            setRegLatitude(userLocation.coords.latitude);
            setRegLongitude(userLocation.coords.longitude);
        }
    }, 1000);
    
  return (
    <View style={styles.container}>
      <MapView 
        initialRegion={{
            latitude: regLatitude,
            longitude: regLongitude,
            latitudeDelta: 10,
            longitudeDelta: 70,
        }}
        style={styles.map}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation={true}>
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});