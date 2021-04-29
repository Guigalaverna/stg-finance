import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from '../pages/Dashboard';

const AppRoutes = createStackNavigator();

export function AuthRoutes(){
    return(
        <AppRoutes.Navigator screenOptions={{ headerShown: false }}>
            <AppRoutes.Screen name="Login" component={Dashboard}/>
        </AppRoutes.Navigator>
    )
}