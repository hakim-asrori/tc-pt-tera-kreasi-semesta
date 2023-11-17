import React, {useRef} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  ScrollView
} from 'react-native';

const windowWidth = Dimensions.get("window").width;

function Article(): JSX.Element {
  return (
    <View style={styles.articleContainer}>
      <View style={styles.articleHeader}>
        <Text style={styles.articleHeaderText}>Berita Terbaru</Text>
        <Text style={styles.articleHeaderOtherText}>Lihat berita lainnya</Text>
      </View>

      <ScrollView style={{ marginTop: 13 }} horizontal>
        <View style={{ width: 150, marginRight: 10 }}>
          <Image style={{}} source={require('../../assets/images/articles/article-2.png') } />
          <Text style={styles.articleCategory}>Kategori</Text>
          <Text  style={styles.articleTitle}>Lorem ipsum dolor sit amet</Text>
        </View>
        <View style={{ width: 150, marginRight: 10 }}>
          <Image style={{}} source={require('../../assets/images/articles/article-1.png') } />
          <Text style={styles.articleCategory}>Kategori</Text>
          <Text  style={styles.articleTitle}>Lorem ipsum dolor sit amet</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  articleContainer: {
    marginTop: 30, 
    marginHorizontal: 50,
  },
  articleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  articleHeaderText: {
    fontSize: 14,
    color: '#121212E5',
    fontWeight: '700'
  },
  articleHeaderOtherText: {
    fontSize: 12,
    color: '#4A50A4',
  },
  articleCategory: {
    fontSize: 10,
    marginVertical: 5,
    color: '#4A50A4',
  },
  articleTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#121212E5',
  },
});

export default Article;