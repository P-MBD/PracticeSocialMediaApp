import { StyleSheet } from "react-native";
const style = StyleSheet.create({
    header:{
        paddingTop:30,
        paddingRight:26,
        paddingLeft:17,
        flex:1, 
        flexDirection:'row',
         alignItems:'center',justifyContent:'space-between'},
    messageNumber:
        {
            fontSize:6,
            fontFamily:'Inter',
            lineHeight:7,
            fontWeight:'600',
            color:'#FFFFFF',
          },
    messageNumberContainer:
        {
            width:10,
            height:10,
            backgroundColor:'#F35BAC',
            borderRadius:10,
            flex:1,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            position:'absolute',
          },
    messageIcon:{
            backgroundColor:'#F9FAFB',
            padding:12,
            borderRadius:100,
    },
    userStoryContainer:{
        paddingHorizontal:28,
        marginTop:12,
    }
    
});
export default style;