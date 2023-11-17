import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

function DetailScreen(): JSX.Element {
  return (
    <ScrollView style={styles.detailContainer}>
      <Text style={styles.detailHeader}>Qorem ipsum dolor sit amet, dolor sit amet consectetur adipiscing elit.</Text>
      <Text style={styles.detailTime}>
        06.33, 22 September 2023
      </Text>
      <View style={styles.divider}></View>
      <Image style={{ marginBottom: 11 }} source={require('../../assets/images/articles/content.png')} />
      <Text style={styles.detailText}>
      Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  detailContainer: {
    marginTop: 60, 
    marginHorizontal: 50,
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