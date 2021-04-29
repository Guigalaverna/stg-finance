import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../pages/Login';

const StackRoutes = createStackNavigator();

export function AuthRoutes(){
    return(
        <StackRoutes.Navigator screenOptions={{ headerShown: false }}>
            <StackRoutes.Screen name="Login" component={Login}/>
        </StackRoutes.Navigator>
    )
}