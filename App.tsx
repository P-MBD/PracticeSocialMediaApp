import React, { useState } from "react";
import {SafeAreaView,ScrollView,View,Pressable,Text, FlatList } from "react-native";
import Title from "./components/Title/Title";
import UserStory from "./components/UserStory/UserStory";
import UserPost from "./components/UserPost/UserPost";
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
const posts = [
  {
    firstName: 'Allison',
    lastName: 'Becker',
    location: 'Sukabumi, Jawa Barat',
    likes: 1201,
    comments: 24,
    bookmarks: 55,
    id: 1,
  },
  {
    firstName: 'Jennifer',
    lastName: 'Wilkson',
    location: 'Pondok Leungsir, Jawa Barat',
    likes: 570,
    comments: 12,
    bookmarks: 60,
    id: 2,
  },
  {
    firstName: 'Adam',
    lastName: 'Spera',
    location: 'Boston, Massachusetts',
    likes: 100,
    comments: 8,
    bookmarks: 7,
    id: 3,
  },
  {
    firstName: 'Nata',
    lastName: 'Vacheishvili',
    location: 'New York, New York',
    likes: 300,
    comments: 18,
    bookmarks: 17,
    id: 4,
  },
  {
    firstName: 'Nicolas',
    lastName: 'Namoradze',
    location: 'Berlin, Germany',
    likes: 1240,
    comments: 56,
    bookmarks: 20,
    id: 5,
  },
];
const pageSize=4;
const pageSizePosts = 2;
const [pageNumber, setPageNumber]= useState(1);
const[isLoading,setIsLoading]= useState(false);
const[isLoadingPosts,setIsLoadingPosts]= useState(false);
const[renderedData, setRenderedData]= useState(data.slice(0,pageSize));
const[renderedDataPosts, setRenderedDataPosts]= useState(posts.slice(0,pageSize));
const pagination = (data, pageNumber, pageSize, posts = false) => {
  let startIndex = (pageNumber - 1) * pageSize;
  //don't return the information that does not exist inside the data array
  if (startIndex >= data.length) {
    return [];
  }
  if (!posts) {
    //set the page number, to the page number that we wanted to fetch so that we have information
    //about which page was the one that was last fetched
    setPageNumber(pageNumber);
  } else {
    setPostPageNumber(pageNumber);
  }
  return data.slice(startIndex, startIndex + pageSize);
};

return(
  <SafeAreaView>
   
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
       <View style={style.userPostContainer}>
              <FlatList 
              onMomentumScrollBegin={()=> setIsLoadingPosts(false)}
               onEndReachedThreshold={0.5}
               keyExtractor={(item => item.id.toString())}
               onEndReached={()=> {
                  if(!isLoading){
                    setIsLoadingPosts(true);
                    setRenderedDataPosts(prev=>[
                    ...prev,
                     ...pagination(posts, pageNumber+1, pageSize, true),
                  ]);
                   setIsLoadingPosts(false);
                  }
               }}
                showsVerticalScrollIndicator={false}
                  data={renderedDataPosts} 
                  renderItem={({item}) => 
                  <UserPost firstName={item.firstName}
                            lastName= {item.lastName}
                            comments = {item.comments}
                            likes = {item.likes}
                            bookmarks= {item.bookmarks}
                            location = {item.location}
                   />}/>
      </View>

     
    
  </SafeAreaView>
  );
};
export default App;