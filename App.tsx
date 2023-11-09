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

    {
      firstName:'Ali',
       id:9,
    },
    {  
       firstName:'Amin',
       id:10,
     },
    {
      firstName:'Joseph',
       id:11,
    },
    {  
       firstName:'Angel',
       id:12,
     },
     {
      firstName:'White',
      id:13,
     },
     {  
        firstName:'Oliver',
        id:14,
    },
    {
      firstName:'Nata',
       id:15,
    },
    {
      firstName:'White',
      id:16,
     },
     {  
        firstName:'Oliver',
        id:17,
    },
    {
      firstName:'Nata',
       id:18,
    },
  
];
const pageSize=4;
const [pageNumber, setPageNumber]= useState(1);
const[isLoading,setIsLoading]= useState(false);
const[renderedData, setRenderedData]= useState(data.slice(0,pageSize));
const pagination= (data, pageNumber, pageSize)=>{
    let startIndex = (pageNumber-1)*pageSize;
    console.log(startIndex, renderedData.length);
    if(startIndex > data.length){
         return [];
        } 
        setPageNumber(pageNumber)
     return data.slice(startIndex,startIndex+pageSize);
}

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
              <FlatList 
               onEndReachedThreshold={0.5}
               keyExtractor={(item => item.id.toString())}
               onEndReached={()=> {
                  if(!isLoading){
                    setIsLoading(true);
                   setRenderedData(prev=>[
                    ...prev,
                     ...pagination(data, pageNumber+1, pageSize)
                  ]);
                   setIsLoading(false);
                  }
               }}
                showsHorizontalScrollIndicator={false}
                 horizontal={true}
                  data={renderedData} 
                  renderItem={({item}) => <UserStory firstName={item.firstName} />}/>
      </View>
    </ScrollView>
  </SafeAreaView>
  );
};
export default App;