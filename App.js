import React from 'react';
import { View , Text, Alert } from 'react-native';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';

class MyComponent extends React.Component {
    componentDidMount() {

      const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });

      rnBiometrics.isSensorAvailable()
        .then((resultObject) => {
          const { available, biometryType } = resultObject

          if (available && biometryType === BiometryTypes.TouchID) {
            console.log('TouchID is supported')
          } else if (available && biometryType === BiometryTypes.FaceID) {
            console.log('FaceID is supported')
          } else if (available && biometryType === BiometryTypes.Biometrics) {
            console.log('Biometrics is supported')
          } else {
            console.log('Biometrics not supported')
          }
        })

        rnBiometrics.simplePrompt({promptMessage: 'Confirm fingerprint'})
          .then((resultObject) => {
            const { success } = resultObject

            if (success) {
              console.log('successful biometrics provided');
              Alert.alert("Authenticated successfully");
            } else {
              console.log('user cancelled biometric prompt')
            }
          })
          .catch(() => {
            console.log('biometrics failed')
          })
          
    }
s
    render() {
        return (
          <View>
             <Text>{"HELLO"}</Text>
          </View>
        );
    }

}

export default MyComponent;