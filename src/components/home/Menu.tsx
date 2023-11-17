import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

function Menu(): JSX.Element {
  return (
    <View>
      <View style={styles.menuContainer}>
        <View>
          <View style={[styles.menuContent, styles.menuCredit]}>
            <Image source={require('../../assets/images/menus/credit.png')} />
          </View>
          <Text style={styles.menuText}>Pulsa</Text>
        </View>
        <View>
          <View style={[styles.menuContent, styles.menuPln]}>
            <Image source={require('../../assets/images/menus/pln.png')} />
          </View>
          <Text style={styles.menuText}>PLN</Text>
        </View>
        <View>
          <View style={[styles.menuContent, styles.menuPdam]}>
            <Image source={require('../../assets/images/menus/pdam.png')} />
          </View>
          <Text style={styles.menuText}>PDAM</Text>
        </View>
        <View>
          <View style={[styles.menuContent, styles.menuVoucher]}>
            <Image source={require('../../assets/images/menus/voucher.png')} />
          </View>
          <Text style={styles.menuText}>Voucher</Text>
        </View>
      </View>
      <View style={[styles.menuContainer, {marginTop: 15}]}>
        <View>
          <View style={[styles.menuContent, styles.menuTv]}>
            <Image source={require('../../assets/images/menus/tv.png')} />
          </View>
          <Text style={styles.menuText}>TV Kabel & Internet</Text>
        </View>
        <View>
          <View style={[styles.menuContent, styles.menuDonation]}>
            <Image source={require('../../assets/images/menus/donation.png')} />
          </View>
          <Text style={styles.menuText}>Donasi</Text>
        </View>
        <View>
          <View style={[styles.menuContent, styles.menuZakat]}>
            <Image source={require('../../assets/images/menus/zakat.png')} />
          </View>
          <Text style={styles.menuText}>Zakat</Text>
        </View>
        <View>
          <View style={[styles.menuContent, styles.menuOthers]}>
            <Image source={require('../../assets/images/menus/others.png')} />
          </View>
          <Text style={styles.menuText}>Lainnya</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  menuContainer: {
    marginTop: 30, 
    marginHorizontal: 30, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  menuContent: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 5
  },
  menuText: {
    color: '#121212E5',
    fontSize: 10, 
    textAlign: 'center',
    width: 55
  },
  menuCredit: {
    backgroundColor: '#E7E7FF'
  },
  menuPln: {
    backgroundColor: '#FAF8E2'
  },
  menuPdam: {
    backgroundColor: '#E1EBFF'
  },
  menuVoucher: {
    backgroundColor: '#EFDCFA'
  },
  menuTv: {
    backgroundColor: '#DBF2FD'
  },
  menuDonation: {
    backgroundColor: '#F9E8E1'
  },
  menuZakat: {
    backgroundColor: '#E6F3E7'
  },
  menuOthers: {
    backgroundColor: '#DAF4F5'
  },
})

export default Menu;