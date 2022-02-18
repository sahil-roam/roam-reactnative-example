

 import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, NativeModules
} from 'react-native';
import Roam from 'roam-reactnative';

import React, { useState } from 'react';
import { TouchableHighlight } from 'react-native';




export default function App(){

  const [response, setResponse] = useState('')

  const { RoamModule } = NativeModules;

  const PUBLISHABLE_KEY = ''

  const initSdk = () => {
    RoamModule.initializeRoam(PUBLISHABLE_KEY)
    setResponse('initializing sdk..')
  }

  const createUser = () => {
    console.log('create user called')
    Roam.createUser("YOUR NAME", success => {
      // do something on success
      setResponse(JSON.stringify(success))
     },
     error => {
     // do something on error
     setResponse(JSON.stringify(error))
     });
  }

  

  return (
    <View style={styles.container}>

      <TouchableHighlight style={styles.button}
      onPress={() => {initSdk()}}
      >
        <Text style={styles.buttonText}>Initialize</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.button}
      onPress={() => {createUser()}}
      >
        <Text style={styles.buttonText}>Create User</Text>
      </TouchableHighlight>


      <Text style={{color: 'black'}}>Response: {response}</Text>


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
  }


});

