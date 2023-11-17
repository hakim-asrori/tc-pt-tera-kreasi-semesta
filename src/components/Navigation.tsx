import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IconFontawesome from 'react-native-vector-icons/FontAwesome6';
import HomeScreen from "../screens/HomeScreen"
import MarketScreen from "../screens/MarketScreen"
import NotificationScreen from "../screens/NotificationScreen"
import ProfileScreen from "../screens/ProfileScreen"
import SplashScreen from "../screens/SplashScreen"
import DetailScreen from '../screens/announcement/DetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const [showTabs, setShowTabs] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTabs(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (!showTabs) {
    return <SplashScreen navigation={undefined} />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator 
      initialRouteName='Home'
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name == 'Home') {
            iconName = "house"
          } else if (route.name == 'Market') {
            iconName = 'store'
          } else if (route.name == 'Notification') {
            iconName = 'bell'
          } else if (route.name == 'Profile') {
            iconName = 'user'
          }

          return <IconFontawesome name={iconName} size={15} color={color} />
        },
        tabBarStyle: {
          height: 60,
          paddingTop: 10,
          paddingBottom: 10
        },
        tabBarActiveTintColor: '#4A50A4',
        tabBarInactiveTintColor: '#C7C7C7',
      })}
      >
        <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ title: 'Home', headerShown: false }} 
        />

        <Tab.Screen 
        name="Market" 
        component={MarketScreen} 
        />

        <Tab.Screen 
        name="Notification" 
        component={NotificationScreen} 
        />
        
        <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
  }
})

export default App;