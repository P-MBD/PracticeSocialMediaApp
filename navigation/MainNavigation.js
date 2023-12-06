import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home/Home";
import Profile from "../Screens/Profile/Profile";
import { Routes } from "./Routes";
const Stack = createStackNavigator();
const MainNavigation = () => {
    return(
        <Stack.Navigator initialRouteName={Routes.Home} screenOptions={{header:()=>null , headerShown:false}}>
            <Stack.Screen name={Routes.Home} component={Home}></Stack.Screen>
             <Stack.Screen name={Routes.Profile} component={Profile}></Stack.Screen>
        </Stack.Navigator>
    );

};
export default MainNavigation;