import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home/Home";
import Profile from "../Screens/Profile/Profile";
import { Routes } from "./Routes";
import {View, Text} from 'react-native';
import ProfileTabTitle from "../components/ProfileTabTitle/ProfileTabTitle";
const Stack = createStackNavigator();
const ProfileTabs = createMaterialTopTabNavigator();
const Tab1= () => {
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>This is a Tab1</Text>
        </View>
    );
}
const Tab2= () => {
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>This is a Tab2</Text>
        </View>
    );
}
const Tab3 = () => {
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>This is a Tab3</Text>
        </View>
    );
}
export const ProfileTabNavigation = () => {
    return (
      <ProfileTabs.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: 'transparent',
          },
          tabBarStyle: {
            elevation: 0,
            zIndex: 0,
          },
        }}>
        <ProfileTabs.Screen
          name={'Tab1'}
          component={Tab1}
          options={{
            tabBarLabel: ({focused}) => {
              return <ProfileTabTitle title={'Photos'} isFocused={focused} />;
            },
          }}
        />
        <ProfileTabs.Screen
          name={'Tab2'}
          component={Tab2}
          options={{
            tabBarLabel: ({focused}) => {
              return <ProfileTabTitle title={'Videos'} isFocused={focused} />;
            },
          }}
        />
        <ProfileTabs.Screen
          name={'Tab3'}
          component={Tab3}
          options={{
            tabBarLabel: ({focused}) => {
              return <ProfileTabTitle title={'Saved'} isFocused={focused} />;
            },
          }}
        />
      </ProfileTabs.Navigator>
    );
  };
  

const MainNavigation = () => {
    return(
        <Stack.Navigator initialRouteName={Routes.Home} screenOptions={{header:()=>null , headerShown:false}}>
            <Stack.Screen name={Routes.Home} component={Home}></Stack.Screen>
             <Stack.Screen name={Routes.Profile} component={Profile}></Stack.Screen>
        </Stack.Navigator>
    );

};
export default MainNavigation;