import React from 'react';
import {View,Text,Image,SafeAreaView,ScrollView} from 'react-native';
import globalStyle from '../../assets/styles/main';
import style from './style';
const Profile = () => {
return(
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
     <ScrollView>
        <View  style={style.profileImageContainer}>
            <View style={style.profileImageContent}>
                <Image  style={style.profileImage}
                 source={require('../../assets/images/default_profile.png')} />
            </View>
        </View>
        <View style={style.userNameContainer}>
            <View style={style.userName}>
               <Text>Emmanuel Robertsen</Text>
             </View>
        </View>
        <View style={style.profileStateContainer}>
            <View style={[style.singleStateContainer,style.singleBorderContainer]}>
                <Text style={style.singleStateNumber}>45</Text>
                <Text style={style.singleStateText}>Following</Text>
            </View>
            <View style={[style.singleStateContainer,style.singleBorderContainer]}>
                <Text style={style.singleStateNumber}>30M</Text>
                <Text style={style.singleStateText}>Followers</Text>
            </View>
            <View style={[style.singleStateContainer,style.singleBorderContainer]}>
                <Text style={style.singleStateNumber}>100</Text>
                <Text style={style.singleStateText}>Posts</Text>
            </View>
        </View>
        <View style={style.border}>

        </View>
     </ScrollView>
    </SafeAreaView>
);
}
export default Profile;