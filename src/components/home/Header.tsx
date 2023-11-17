import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontawesome from 'react-native-vector-icons/FontAwesome6';
import IconFontawesomePro from 'react-native-vector-icons/FontAwesome6Pro';

function Header(): JSX.Element {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerSaldo}>
          <View style={styles.headerSaldoText}>
            <Text style={{ color: "white", marginEnd: 5, fontSize: 10 }}>Total Saldo</Text>
            <IconMaterial name='eye-off-outline' color='#ffffff80' /> 
          </View>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={{ color: "white", fontSize: 9, marginEnd: 5 }}>Rp</Text>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>956.100</Text>
          </View>
        </View>
        <View style={styles.headerPoint}>
          <View style={styles.headerPointText}>
            <IconFontawesome name="coins" color='#0278d1' /> 
            <Text style={{ color: '#263238', fontSize: 10, marginStart: 5 }}>
              100 Points
            </Text>
            <IconMaterial name="chevron-right" color='#0278d1' /> 
          </View>
        </View>
      </View>
      <View style={{ marginTop: 20, marginHorizontal: 50, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ alignItems: 'center' }}>
          <IconMaterial name="plus-circle" size={25} color='#fff' /> 
          <Text style={{ fontSize:10, color: "white", marginTop: 3 }}>Top Up</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <IconMaterial name="swap-vertical" size={25} color='#fff' /> 
          <Text style={{ fontSize:10, color: "white", marginTop: 3  }}>Transfer</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <IconMaterial name="arrow-down-bold-box-outline" size={25} color='#fff' /> 
          <Text style={{ fontSize:10, color: "white", marginTop: 3  }}>Penarikan</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <IconMaterial name="note-text" size={25} color='#fff' /> 
          <Text style={{ fontSize:10, color: "white", marginTop: 3  }}>Riwayat</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginTop: 50,
  },
  headerSaldo: {
    flex: 1,
  },
  headerSaldoText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerPoint: {
    flex: 1,
    alignItems: 'flex-end',
  },
  headerPointText: {
    backgroundColor: '#E6F1FA', 
    paddingHorizontal: 12,
    paddingVertical: 2, 
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Header