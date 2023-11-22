import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IconFontawesome from 'react-native-vector-icons/FontAwesome6';

export const SLIDER_WIDTH = Dimensions.get('window').width;

function DetailScreen({navigation}: {navigation: any}): JSX.Element {
  return (
      <LinearGradient colors={['#FFFFFF', '#FFFFFF', '#FFFFFF','#FFFFFF', '#FFFFFF','#5ACCFF']}
        start={{ x: 0, y: 1.7 }}
        end={{ x: 1, y: 0 }} 
        style={styles.bubbleBackground}>
        <View style={styles.navigationContainer}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('HomeStack')
          }} style={{  zIndex: 99 }}>
            <IconFontawesome name="arrow-left" color='black' size={20} /> 
          </TouchableOpacity>
          <Text style={styles.navigationText}>Detail Pengumuman</Text>
        </View>
        <ScrollView style={styles.detailContainer}>
            <Text style={styles.detailHeader}>Qorem ipsum dolor sit amet, dolor sit amet consectetur adipiscing elit.</Text>
            <Text style={styles.detailTime}>
              06.33, 22 September 2023
            </Text>
            <View style={styles.divider}></View>
            <Image style={{ marginBottom: 11, width: '100%' }} source={require('../../assets/images/articles/content.png')} />
            <Text style={styles.detailText}>
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
            </Text>
        </ScrollView>
      </LinearGradient>
  )
}

const styles = StyleSheet.create({
  navigationContainer: {
    marginTop: 50,
    marginHorizontal: 30,
  },
  navigationText: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: -21,
    color: 'black',
    fontWeight: '700',
  },
  detailContainer: {
    marginTop: 30, 
    marginHorizontal: 30,
  },
  bubbleBackground: {
    height: '100%',
  },
  detailHeader: {
    fontSize: 16,
    fontWeight: '700',
    color: '#121212E5',
    lineHeight: 22,
  },
  detailTime: {
    fontSize: 11,
    color: '#979FAD',
    lineHeight: 18,
    marginBottom: 11
  },
  detailText: {
    fontSize: 13,
    lineHeight: 18,
    color: '#121212E5',
    textAlign: 'justify'
  },
  divider: {
    marginBottom: 20,
    borderColor: '#D0D2F1',
    borderStyle: 'solid',
    borderWidth: 1
  }
})

export default DetailScreen