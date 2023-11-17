import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native'
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
import QrcodeScreen from '../screens/QrcodeScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeStack" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="DetailStack" component={DetailScreen} options={{ 
        title: 'Detail Pengumuman',
        headerTransparent: true,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 15,
          fontWeight: '700',
        },
       }} />
    </HomeStack.Navigator>
  );
}

function Navigation(): JSX.Element {
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
          } else if (route.name == 'Qrcode') {
            iconName = 'qrcode'
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
        component={HomeStackScreen}
        options={{ title: 'Home', headerShown: false }} 
        />

        <Tab.Screen 
        name="Market" 
        component={MarketScreen} 
        options={{ title: 'Pasar' }}
        />

        <Tab.Screen 
        name="Qrcode" 
        component={QrcodeScreen}
        options={{ 
          tabBarIcon: ({focused}) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <IconFontawesome name='qrcode' size={15} color='black' />
            </View>
          ),
          tabBarButton: (props) => (
            <TouchableOpacity style={{ top: -30 }}>
              <View style={{ width: 52, height: 52, backgroundColor: '#4A50A4', justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}>
                <IconFontawesome name='qrcode' size={27} color='white' />
              </View>
            </TouchableOpacity>
          ),
          tabBarLabel: 'QRIS',
         }} 
        />

        <Tab.Screen 
        name="Notification" 
        component={NotificationScreen} 
        options={{ title: 'Notifikasi' }}
        />
        
        <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ title: 'Profil' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;