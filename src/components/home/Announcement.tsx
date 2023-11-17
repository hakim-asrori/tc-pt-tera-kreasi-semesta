import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

function Announcement({navigation}: {navigation: any}): JSX.Element {
  return (
    <View style={styles.announcementContainer}>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Details')
      }}>
        <Text style={styles.announcementText}>Pengumuman</Text>
        <View style={styles.announcementContent}>
          <Image source={require('../../assets/images/menus/thumbtack.png')} />
          <View>
            <Text style={styles.announcementTitle}>Judul Pengumuman</Text>
            <Text style={styles.announcementDesc}>
              Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  announcementContainer: {
    marginTop: 20, 
    marginHorizontal: 50, 
  },
  announcementText: {
    fontSize: 14,
    color: '#121212E5',
    fontWeight: '700'
  },
  announcementContent: {
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 10,
    shadowColor: 'gray',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4
  },
  announcementTitle: {
    fontSize: 11,
    marginTop: -3,
    marginLeft: 8,
    color: '#121212E5',
    fontWeight: '700'
  },
  announcementDesc: {
    marginLeft: 8,
    fontSize: 10,
    lineHeight: 15,
    color: '#979FAD'
  }
})

export default Announcement