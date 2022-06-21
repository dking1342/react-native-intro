//import liraries
import { StyleSheet } from 'react-native';

// define your styles
export const globalStyles = StyleSheet.create({
  container: {
    // marginTop:40,
    padding:24,
    flex:1,
  },
  titleText:{
    fontFamily:"Nunito-Bold",
    fontSize:18,
    color:"#333",
  },
  paragraph:{
    marginVertical:8,
    lineHeight:20,
  },
  input:{
    borderWidth:1,
    borderColor:"#ddd",
    padding:10,
    fontSize:18,
    borderRadius:6,
  },
  errorText:{
    color:"firebrick",
    fontWeight:"bold",
    marginBottom:10,
    marginTop:6,
    textAlign:"center",
  }
});

