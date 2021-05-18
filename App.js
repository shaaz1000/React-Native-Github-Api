import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import UsersScreen from "./source/screens/UsersScreen"
import SearchUserScreen from "./source/screens/SearchUserScreen"
import UserProfileScreen from "./source/screens/UserProfileScreen"
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const bottomTab = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel:false,
                style:{
                    backgroundColor:"#fffbdf"
                }
            }}
        >
            <Tab.Screen name="Users" component={UsersScreen}/>
            <Tab.Screen name="Search" component={SearchUserScreen}/>
        </Tab.Navigator>
    )
}
const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="App" component={bottomTab}/>
                <Stack.Screen name="User Profile" component={UserProfileScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App