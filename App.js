

 import {
  StyleSheet,
  Text,
  View} from 'react-native';
import Roam from 'roam-reactnative';

import React, { useEffect } from 'react';
import { TouchableHighlight } from 'react-native';




export default function App(){

 
  const startTracking = () => {
    Roam.startTrackingTimeInterval(5, Roam.DesiredAccuracy.HIGH);
    
    Roam.setForegroundNotification(true,
      "Awesome Example",
      "Click here to redirect the app",
      "mipmap/ic_launcher",
      "com.baretest.MainActivity",
      "com.baretest.RoamForegroundService");
  }

  const stopTracking = () => {
    Roam.stopTracking()
    Roam.setForegroundNotification(false,
      "Awesome Example",
      "Click here to redirect the app",
      "mipmap/ic_launcher",
      "com.baretest.MainActivity",
      "com.baretest.RoamForegroundService");
  }

  useEffect(() => {
    Roam.offlineLocationTracking(true)
    Roam.disableBatteryOptimization()
    
  }, [])

  
  

  return (
    <View style={styles.container}>

      <TouchableHighlight style={styles.button}
      onPress={() => {startTracking()}}
      >
        <Text style={styles.buttonText}>Start Tracking</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.button}
      onPress={() => {stopTracking()}}
      >
        <Text style={styles.buttonText}>Stop Tracking</Text>
      </TouchableHighlight>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center' 
  },
  button: {
    padding: 10,
    backgroundColor: 'blue'
  },
  buttonText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white'
  },
  touchableOpacity: {
    alignItems: 'center',
    padding: 20
  }


});

