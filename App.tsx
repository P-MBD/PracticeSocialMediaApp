import React, { useState } from "react";
import {SafeAreaView,ScrollView,View,Pressable,Text, FlatList } from "react-native";
import Title from "./components/Title/Title";
import UserStory from "./components/UserStory/UserStory";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import style from './assets/styles/main';
const App=()=> {
    //All of the items in our stories
  const data = [
    {
      firstName:'Ali',
       id:1,
    },
    {  
       firstName:'Amin',
       id:2,
     },
    {
      firstName:'Joseph',
       id:3,
    },
    {  
       firstName:'Angel',
       id:4,
     },
     {
      firstName:'White',
      id:5,
     },
     {  
        firstName:'Oliver',
        id:6,
    },
    {
      firstName:'Nata',
       id:7,
    },
    {  
      firstName:'Adam',
       id:8,
    },
];
const pageSize=4;
const [pageNumber, setPageNumber]= useState(1);
const[isLoading,setIsLoading]= useState(false);
const[renderedData, setRenderedData]= useState([]);
return(
  <SafeAreaView>
    <ScrollView>
        <View style={style.header}>
           <Title title={"Let's Explore"} />
             <Pressable style={style.messageIcon}> 
               <FontAwesomeIcon icon={faEnvelope}  color={'#CACDDE'} size={20}/>
                <View style={style.messageNumberContainer}>
                <Text style={style.messageNumber}>2</Text>
              </View>
          </Pressable>
      </View>
       <View style={style.userStoryContainer}>
              <FlatList   showsHorizontalScrollIndicator={false} horizontal={true} data={data}  renderItem={({item}) => <UserStory firstName={item.firstName} />}/>
      </View>
    </ScrollView>
  </SafeAreaView>
  );
};
export default App;