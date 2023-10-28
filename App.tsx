import React from "react";
import {SafeAreaView,ScrollView,View,Pressable,Text } from "react-native";
import Title from "./components/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import style from './assets/styles/main';
const App=()=> {
return(
  <SafeAreaView>
    <ScrollView>
      <View style={style.header}>
         <Title title={"Let's Explore"} />
         <Pressable style={{
          backgroundColor:'#F9FAFB',
          padding:12,
          borderRadius:100,
          }}> 
              <FontAwesomeIcon icon={faEnvelope}  color={'#CACDDE'} size={20}/>
              <View style={style.messageNumberContainer}>
                <Text style={style.messageIcon}>2</Text>
              </View>
          </Pressable>
      </View>
    </ScrollView>
  </SafeAreaView>
  );
};

export default App;