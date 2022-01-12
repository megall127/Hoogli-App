import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SinginFirst from "../screens/Unloged/Singin/SinginFirst";
import Home from "../screens/Logged/Home/home";
import Profile from "../screens/Logged/Profile";


const Tab = createBottomTabNavigator();

const BottomRoutes = () => {



    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: 'white'},
                headerShown: false,
                tabBarActiveTintColor: '#8ecf84',
                tabBarInactiveTintColor: 'black',
              }}
            >
            <Tab.Screen name="HOME" component={Home} />
            <Tab.Screen name="PROFILE" component={Profile} />
        </Tab.Navigator>
    )
}

export default BottomRoutes;