import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default function GetUserLocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let userLocation;
  if (errorMsg) {
    console.log("Error in getting location...", errorMsg);
  } else if (location) {
    userLocation = JSON.stringify(location);
  }

  return userLocation;
}