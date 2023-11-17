import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import Header from '../components/home/Header';
import Menu from '../components/home/Menu';
import Announcement from '../components/home/Announcement';
import Advertisement from '../components/home/Advertisement';
import Article from '../components/home/Article';

function HomeScreen({navigation}: {navigation: any}): JSX.Element {
  return (
    <ScrollView>
      <LinearGradient 
        colors={['#2F3977', '#4A50A4', '#00E5BD']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1.6, y: 1 }} 
        style={styles.bodyBackground}>
          <Header />
          
          <View style={styles.bodyContent}>
            <View style={styles.bodyContentTopMenu}>
              <Text style={styles.bodyContentTopMenu.menus}>Desa</Text>
              <Text style={styles.bodyContentTopMenu.menus}>Sarana</Text>
              <Text style={styles.bodyContentTopMenu.menuActive}>Bayar</Text>
            </View>
            
            <Menu />
            <Announcement navigation={navigation} />
            <Advertisement />
            <Article />
          </View>
        </LinearGradient>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  bodyBackground: {
    height: "100%"
  },
  bodyContent: { 
    backgroundColor: 'white', 
    marginTop: 30,
    marginBottom: 30, 
    height: "100%", 
    borderTopEndRadius: 30, 
    borderTopStartRadius: 30 
  },
  bodyContentTopMenu: {
    marginHorizontal: 50, 
    marginTop: 20,
    marginBottom: -10, 
    flexDirection: 'row',
    menus: {
      color: '#979FAD', 
      fontSize: 11, 
      paddingHorizontal: 20, 
      paddingVertical: 7, 
      borderRadius: 50,
    },
    menuActive: {
      fontSize: 11, 
      paddingHorizontal: 20, 
      paddingVertical: 7, 
      borderRadius: 50,
      color: '#474D9B', 
      backgroundColor: '#474D9B1A', 
    }
  }
})

export default HomeScreen