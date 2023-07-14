import React from 'react'
import { Text, View,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
const CoinItem = ({marketCoin}) => {
  const {
    name,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    market_cap,image} 
    = marketCoin;
  return (
    <View style={styles.coinContainer}>
         {/* <Text style={{ color:'white' }}>Hello World!</Text> */}
          <Image source={{ uri: image }} 
          style={styles.coinImage} />
          
          <View>
            <Text style={ styles.title }>  {name} </Text>
                <View style={{flexDirection:'row'}}>
                <View style={styles.rankContainer}>
                  <Text style={ styles.rank }> {market_cap_rank} </Text>
                </View>
                <Text style={ styles.text }>  {symbol.toUpperCase()} </Text>
                    <AntDesign name="caretup" size={12} color="white" style={{ alignSelf: 'center' }} />
                    <Text style={ styles.text }>  {price_change_percentage_24h}%</Text>
                </View>
          </View>
          <View style ={{ marginLeft: 'auto' }}>
              <Text style={styles.title}> {current_price}</Text>
              <Text style={styles.text}>{market_cap} T</Text>
          </View>
    </View>
      
    
  );
}

export default CoinItem
