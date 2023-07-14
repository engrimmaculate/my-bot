import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   
    title :{
      color: 'white',
      fontSize:16,
      fontWeight: 'bold',
      marginBottom: 3
    },
    text:{
      color: 'white',
      marginRight: 5,
      alignSelf:'center',
    },
    coinContainer: {
      flexDirection: 'row',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#282828', //'grey', 
      padding:15,
    },
    coinImage : {
       height:30,
       width:30, 
       marginRight:5, 
       alignSelf:'center',
      //  marginLeft: 20, 
      },
    rank: {
      fontWeight: 'bold',
      color: 'white',
    },
    rankContainer : {
      backgroundColor:'#585858',
      paddingHorizontal:5,
      borderRadius:2,
      marginRight: 5,
      marginLeft:10,
    },
  });
  
  export default styles;