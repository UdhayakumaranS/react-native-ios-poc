import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import Map from './components/MapView';
import GetUserLocation from './components/GetLocation';

export default function App() {
  let userLocation = GetUserLocation();

  return (
    <View style={styles.container}>
      {/* <Text style={styles.paragraph}>{userLocation}</Text> */}
      <Map props={userLocation}/>
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
});
