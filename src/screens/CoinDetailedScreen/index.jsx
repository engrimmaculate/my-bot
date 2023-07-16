import React from 'react'
import { View, Text,Image } from 'react-native'
import { Ionicons, EvilIcons,AntDesign } from '@expo/vector-icons';
import Coin from '../../../assets/data/crypto.json'
import styles from './styles'
import CoinDetailedHeader from './components/CoinDetailedHeader';
const CoinDetailedScreen = () => {
  const {image:{ small }, 
  name,
  symbol,
   market_data: {market_cap_rank,current_price,price_change_percentage_24h}} 
   = Coin;
   const percentageColor =price_change_percentage_24h < 0 ? '#ea3943' : '#17c784'
  return (
    <View style={{ paddingHorizontal:10 }}>
      <CoinDetailedHeader 
      image={small}
      name={name}
      symbol ={symbol}
      marketCapRank={
        market_cap_rank
        }

       />
       <View style={styles.priceContainer}>
       <View >
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.currentPrice}>$ {current_price.usd}</Text>
       </View>
       <View style={{ backgroundColor:percentageColor,paddingVertical:5, borderRadius:5, flexDirection:'row' }}>
       <AntDesign 
                    name={price_change_percentage_24h <0 ? 'caretdown' : 'caretup'} 
                    size={12} 
                    color={'white'} 
                    style={{ alignSelf: 'center' }} />
          <Text style={styles.priceChange}>{price_change_percentage_24h.toFixed(2)}%</Text>
       </View>
          
       </View>
       
    </View>

    
  )
}

export default CoinDetailedScreen;