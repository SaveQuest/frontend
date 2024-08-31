import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CommentIcon from './CommentIcon';
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import LinkIcon from './LinkIcon'; 

const ShareSection = () => {
  return (
    <View style={styles.shareContainer}>
      <View style={styles.shareHeader}>
        <Text style={styles.shareTitle}>친구한테 자랑하기</Text>
      </View>
      <View style={styles.shareIconsContainer}>
        <View style={styles.shareButton}>
          <View style={styles.iconBackground}>
            <CommentIcon width={50} height={50} />
          </View>
        </View>
        <View style={styles.shareButton}>
          <View style={styles.iconBackground}>
            <FacebookIcon width={40} height={34} />
          </View>
        </View>
        <View style={styles.shareButton}>
          <View style={styles.iconBackground}>
            <InstagramIcon width={20} height={20} />
          </View>
        </View>
        <View style={styles.shareButton}>
          <View style={styles.iconBackground}>
            <LinkIcon width={30} height={30} stroke="#000" /> 
          </View>
        </View>
      </View>
      <Text style={styles.shareFooter}>친구들한테 나의 진행도를 자랑해보세요!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  shareContainer: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 20,
    marginVertical: 10,
  },
  shareHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  shareTitle: {
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#000',
  },
  downloadIcon: {
    marginLeft: 'auto',
    padding: 10,
  },
  shareIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  shareButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 48,
  },
  iconBackground: {
    backgroundColor: '#F5F5F5',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareFooter: {
    textAlign: 'center',
    color: '#CAC9CC',
    marginTop: 20,
    fontWeight:'bold',
    fontSize: 16,
  },
});

export default ShareSection;