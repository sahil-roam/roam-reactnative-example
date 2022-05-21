import Roam from 'roam-reactnative';

export default function headlessTask () {
    console.log('headless task listener')
    Roam.startListener('location', locations => {
        console.log(JSON.stringify(locations))
      })
    }