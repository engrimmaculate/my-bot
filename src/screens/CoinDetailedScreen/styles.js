import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    currentPrice : { color:'white', fontSize:30, fontWeight:'600',letterSpacing:1, },
    name : { 
        color:'white', 
        fontSize:15, 
    },
    priceContainer : { 
        paddingTop:20, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingRight:5, 
    },
    priceChange : {color: 'white', 
    fontSize:17, 
    fontWeight:'500',
},
});

export default styles;