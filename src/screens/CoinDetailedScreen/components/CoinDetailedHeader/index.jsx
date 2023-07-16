import React from 'react'
import { View, Text,Image } from 'react-native'
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import styles from './styles';
const CoinDetailedHeader = (props) => {
  const {image,
    name,
    symbol,
    marketCapRank
  } =props;
  return (
    <View style={styles.headerContainer}>
    <Ionicons name="chevron-back-sharp" size={34} color='white' />
    <View style={styles.tickerContainer} >
      <Image source={{ uri: image}} style={{ width:30, height: 25, paddingLeft: 5, }} />
    <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
    <View style={styles.rankContainer}>
      <Text style={{ color:'white', fontWeight:'bold', fontSize:15 }}> #{marketCapRank}</Text>
    </View>
    
    </View>
    
    <EvilIcons name="user" size={34} color='white' style={{  paddingRight:5, }} />
    </View>
  )
}

export default CoinDetailedHeader
