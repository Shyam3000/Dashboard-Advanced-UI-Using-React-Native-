import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
      },
      textColorW: {
        color:'white',
        fontSize:32,
        fontWeight:'bold'
      },
      circle: {
        width:130,
        height:50,
        marginTop:-40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white',
        borderRadius:40,
        margin:10,
        borderTopColor:'green',
        borderWidth:10
      },
      cirChange: {
        fontWeight:'bold',
        color:'red',
        fontSize:22
      },
      headerTxt: {
        backgroundColor:'red',
        width:400,
        padding:15,
        paddingBottom:60,
        textAlign:'center',
        fontSize:23,
        marginBottom:5,
        fontWeight:'bold',
        color:'white',
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40
      },
      txtStyle: {
        fontSize: 31,
        color: 'red',
        fontWeight:'bold',
      },
      imagChange: {
        width: 120,
        borderRadius:20,
        height: 120,
      },
      flxBox: {
       flexDirection:'row',
       margin:2
      },
      bgImg: {
        width:150,
        height:150,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:40,
        margin:5
      }
      });
  export default styles;