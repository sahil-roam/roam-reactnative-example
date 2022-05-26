

 import {
  StyleSheet,
  Text,
  View} from 'react-native';
import Roam from 'roam-reactnative';

import React, { useEffect, useState } from 'react';
import { TouchableHighlight, ScrollView } from 'react-native';




export default function App(){

  const [onlineTripId, setOnlineTripId] = useState('')
  const [offlineTripId, setOfflineTripId] = useState('')
  const [response, setResponse] = useState('')
  const [userId, setUserId] = useState('')

  useEffect(() => {
    Roam.offlineLocationTracking(true)
    Roam.disableBatteryOptimization()

    Roam.enableAccuracyEngine(10)
    
  }, [])


  // --- batch config ---

  const setBatchReceiver = () => {
    Roam.setBatchReceiverConfig(Roam.NetworkState.BOTH, 10, 20, success => {
      console.log(JSON.stringify(success))
      setResponse(JSON.stringify(success))
    },
    error => {
      console.log(JSON.stringify(error))
      setResponse(JSON.stringify(error))
    })
  }

  const getBatchReceiver = () => {
    Roam.getBatchReceiverConfig(success => {
      console.log(JSON.stringify(success))
      setResponse(JSON.stringify(success))
    },
    error => {
      console.log(JSON.stringify(error))
      setResponse(JSON.stringify(error))
    })
  }

  const resetBatchReceiver = () => {
    Roam.resetBatchReceiverConfig(
      success => {
        console.log(JSON.stringify(success))
        setResponse(JSON.stringify(success))
      },
      error => {
        console.log(JSON.stringify(error))
        setResponse(JSON.stringify(error))
      }
    )
  }


  // --- user start ---

  const createUser = () => {
    Roam.createUser('test user', success => {
      console.log(JSON.stringify(success))
      setUserId(success.userId);
      setResponse(JSON.stringify(success))
    },
    error => {
      console.log(JSON.stringify(error))
    })
  }

  // --- user end ---

  // ---- online trip start ---

  const createOnlineTrip = () => {
    Roam.createTrip(false, success => {
      console.log(JSON.stringify(success))
      setOnlineTripId(success.id)
      setResponse(JSON.stringify(success))
    },
    error => {
      console.log(JSON.stringify(error))
    })
  }

  const startOnlineTrip = () => {
    Roam.startTrip(onlineTripId, 'test online trip', success => {
      console.log(JSON.stringify(success))
      setResponse(JSON.stringify(success))
    },
    error => {
      console.log(JSON.stringify(error))
    })
  }

  const stopOnlineTrip = () => {
    Roam.stopTrip(onlineTripId, success => {
      console.log(JSON.stringify(success))
      setResponse(JSON.stringify(success))
    },
    error => {
      console.log(JSON.stringify(error))
    })
  }

  const subscribeOnlineTrip = () => {
    Roam.subscribeTripStatus(onlineTripId)
  }

  const unsubscribeOnlineTrip = () => {
    Roam.unSubscribeTripStatus(onlineTripId)
  }

  // --- online trip end ---



  // --- offline trip start ---

  const createOfflineTrip = () => {
    Roam.createTrip(true, success => {
      console.log(JSON.stringify(success))
      setOfflineTripId(success.id)
      setResponse(JSON.stringify(success))
    },
    error => {
      console.log(JSON.stringify(error))
    })
  }

  const startOfflineTrip = () => {
    Roam.startTrip(offlineTripId, 'test offline trip', success => {
      console.log(JSON.stringify(success))
      setResponse(JSON.stringify(success))
    },
    error => {
      console.log(JSON.stringify(error))
    })
  }

  const stopOfflineTrip = () => {
    Roam.stopTrip(offlineTripId, success => {
      console.log(JSON.stringify(success))
      setResponse(JSON.stringify(success))
    },
    error => {
      console.log(JSON.stringify(error))
    })
  }

  const subscribeOfflineTrip = () => {
    Roam.subscribeTripStatus(offlineTripId)
  }

  const unsubscribeOfflineTrip = () => {
    Roam.unSubscribeTripStatus(offlineTripId)
  }

  // --- offline tracking end ---

  // --- tracking start ---
 
  const startTracking = () => {
    Roam.startTrackingTimeInterval(5, Roam.DesiredAccuracy.HIGH);
    Roam.publishAndSave(null);
    // Roam.toggleListener(true, true, success => {
    //   console.log(JSON.stringify(success))
    //   Roam.subscribe('LOCATION', userId)
    // }, error => {
    //   console.log(JSON.stringify(error))
    // })

    // Roam.startListener('location', locations => {
    //   console.log(JSON.stringify(locations))
    // })
    
    Roam.setForegroundNotification(true,
      "Awesome Example",
      "Click here to redirect the app",
      "mipmap/ic_launcher",
      "com.baretest.MainActivity",
      "com.baretest.RoamForegroundService");
  }

  const stopTracking = () => {
    Roam.stopTracking()
    //Roam.enableAccuracyEngine()
    Roam.setForegroundNotification(false,
      "Awesome Example",
      "Click here to redirect the app",
      "mipmap/ic_launcher",
      "com.baretest.MainActivity",
      "com.baretest.RoamForegroundService");
  }

  // --- tracking end ---

  // --- trip listener start ---

  const startTripListener = () => {
    Roam.startListener('trip_status', trip => {
      console.log(JSON.stringify(trip))
      setResponse(JSON.stringify(trip))
    })
  }

  // --- trip listener end ---

  

  
  

  return (
    <View style={styles.container}>
      <ScrollView>

        <Text style={styles.responseText}>Response: {response}</Text>

      {/* user */}

<TouchableHighlight style={styles.button}
      onPress={() => {createUser()}}
      >
        <Text style={styles.buttonText}>Create User</Text>
      </TouchableHighlight>

      {/* tracking */}

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

      {/* batch config */}

      <TouchableHighlight style={styles.button}
      onPress={() => {setBatchReceiver()}}
      >
        <Text style={styles.buttonText}>Set Batch Receiver</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.button}
      onPress={() => {getBatchReceiver()}}
      >
        <Text style={styles.buttonText}>Get Batch Receiver</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.button}
      onPress={() => {resetBatchReceiver()}}
      >
        <Text style={styles.buttonText}>Reset Batch Receiver</Text>
      </TouchableHighlight>



      {/* trip listener */}

      <TouchableHighlight style={styles.button}
      onPress={() => {startTripListener()}}
      >
        <Text style={styles.buttonText}>Start Trip Listener</Text>
      </TouchableHighlight>
      
      {/* offline trip */}

      <TouchableHighlight style={styles.button}
      onPress={() => {createOfflineTrip()}}
      >
        <Text style={styles.buttonText}>Create Offlie Trip</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button}
      onPress={() => {startOfflineTrip()}}
      >
        <Text style={styles.buttonText}>Start Offline Trip</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button}
      onPress={() => {subscribeOfflineTrip()}}
      >
        <Text style={styles.buttonText}>Subscribe Offline Trip</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button}
      onPress={() => {stopOfflineTrip()}}
      >
        <Text style={styles.buttonText}>Stop Offline Trip</Text>
      </TouchableHighlight>

      

      <TouchableHighlight style={styles.button}
      onPress={() => {unsubscribeOfflineTrip()}}
      >
        <Text style={styles.buttonText}>Unsubscribe Offline Trip</Text>
      </TouchableHighlight>

      {/* online trip */}

      <TouchableHighlight style={styles.button}
      onPress={() => {createOnlineTrip()}}
      >
        <Text style={styles.buttonText}>Create Online Trip</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button}
      onPress={() => {startOnlineTrip()}}
      >
        <Text style={styles.buttonText}>Start Online Trip</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button}
      onPress={() => {subscribeOnlineTrip()}}
      >
        <Text style={styles.buttonText}>Subscribe Online Trip</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button}
      onPress={() => {stopOnlineTrip()}}
      >
        <Text style={styles.buttonText}>Stop Online Trip</Text>
      </TouchableHighlight>

      

      <TouchableHighlight style={styles.button}
      onPress={() => {unsubscribeOnlineTrip()}}
      >
        <Text style={styles.buttonText}>Unsubscribe Offline Trip</Text>
      </TouchableHighlight>

      </ScrollView>

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
    backgroundColor: 'blue',
    margin: 20
  },
  buttonText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white'
  },
  touchableOpacity: {
    alignItems: 'center',
    padding: 20,
    margin: 20
  },
  responseText: {
    margin: 20
  }


});

