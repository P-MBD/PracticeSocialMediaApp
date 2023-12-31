import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
    profileImageContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        marginTop:32,
    },
    profileImageContent:{
        borderWidth:1,
        padding:3,
        borderColor:'#0150EC',
        borderRadius:120,
    },
    profileImage:{
        width:120,
        height:120,
    },
    userName:{
        fontFamily:'Inter',
        fontWeight:'600',
        fontSize:20,
        lineHeight:24,
        color:'#022150',
    },
    userNameContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20,
    },
    profileStateContainer:{
        marginHorizontal:24,
        flexDirection:'row',
        borderWidth:1,
        justifyContent:'center',
        marginTop:16,
    },
    singleStateContainer:{
        alignItems:'center',
        paddingHorizontal:18,
        paddingVertical:10,
    },
    singleBorderContainer:{
        borderRightWidth:1,
        borderColor:'#E9EFF1',
    },
    singleStateNumber:{
        fontFamily:'Inter',
        fontWeight:'600',
        fontSize:20,
        lineHeight:24,
        color:'#022150',
    },
    singleStateText:{
        marginTop:26,
        fontFamily:'Inter',
        fontWeight:'400',
        fontSize:16,
        lineHeight:19,
        color:'#79869F',
    },
    border:{
        borderTopWidth:1,
        borderColor:'#EFF2F6',
        marginVertical:16,
        marginHorizontal:28,
    }
})
export default style;