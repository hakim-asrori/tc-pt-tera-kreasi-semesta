import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import Header from '../components/home/Header';

function HomeScreen({navigation}: {navigation: any}): JSX.Element {
  return (
    <LinearGradient 
    colors={['#2F3977', '#4A50A4', '#00E5BD']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1.6, y: 1 }} 
    style={styles.bodyBackground}>
      <Header />
      
      <View style={styles.bodyContent}>
        <View style={{ marginHorizontal: 50, marginTop: 20, flexDirection: 'row' }}>
          <Text style={{ color: '#190482', fontSize: 11, backgroundColor: '#C2D9FF', paddingHorizontal: 15, paddingVertical: 2, borderRadius: 50 }}>Desa</Text>
          <Text style={{ color: '#190482', fontSize: 11, paddingHorizontal: 15, paddingVertical: 2, borderRadius: 50, marginLeft: 10 }}>Sarana</Text>
          <Text style={{ color: '#190482', fontSize: 11, paddingHorizontal: 15, paddingVertical: 2, borderRadius: 50, marginLeft: 10 }}>Bayar</Text>
        </View>
        <View style={{ marginTop: 30, marginHorizontal: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: 'black', fontSize: 11, textAlign: 'center', width: 60, backgroundColor: 'lightblue', borderRadius: 50, }}>Surat</Text>
          <Text style={{ color: 'black', fontSize: 11, textAlign: 'center', width: 60, backgroundColor: 'lightblue', borderRadius: 50, }}>Bansos</Text>
          <Text style={{ color: 'black', fontSize: 11, textAlign: 'center', width: 60, backgroundColor: 'lightblue', borderRadius: 50, }}>Emergency</Text>
          <Text style={{ color: 'black', fontSize: 11, textAlign: 'center', width: 60, backgroundColor: 'lightblue', borderRadius: 50, }}>Nomor Penting</Text>
        </View>
        <View style={{ marginTop: 20, marginHorizontal: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: 'black', fontSize: 11, textAlign: 'center', width: 60, backgroundColor: 'lightblue', borderRadius: 50, }}>E-Samsat</Text>
          <Text style={{ color: 'black', fontSize: 11, textAlign: 'center', width: 60, backgroundColor: 'lightblue', borderRadius: 50, }}>Iuran</Text>
          <Text style={{ color: 'black', fontSize: 11, textAlign: 'center', width: 60, backgroundColor: 'lightblue', borderRadius: 50, }}>PBB</Text>
          <Text style={{ color: 'black', fontSize: 11, textAlign: 'center', width: 60, backgroundColor: 'lightblue', borderRadius: 50, }}>Lainnya</Text>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  bodyBackground: {
    height: "100%"
  },
  bodyContent: { 
    backgroundColor: 'white', 
    marginTop: 30, 
    height: "100%", 
    borderTopEndRadius: 30, 
    borderTopStartRadius: 30 }
})

export default HomeScreen