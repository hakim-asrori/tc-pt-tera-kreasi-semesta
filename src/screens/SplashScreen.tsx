import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function SplashScreen({navigation}: {navigation: any}): JSX.Element {

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Home')
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation])

  return (
    <LinearGradient 
    colors={['#2F3977', '#4A50A4', '#00E5BD']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1.6, y: 1 }}
    style={styles.bodyBackground}>
      <View style={styles.bodyContent}>
        <Image source={require('../assets/images/sipantas-logo.png')} />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  bodyBackground: {
    flex: 1, 
    height: "100%"
  },
  bodyContent: {
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default SplashScreen