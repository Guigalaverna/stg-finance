import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';

import { useFonts,
  Jost_400Regular,
        Jost_600SemiBold,
        Jost_700Bold } 
from '@expo-google-fonts/jost';
        
import { AuthRoutes } from './src/routes/auth.routes';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
    Jost_700Bold
  })

  if(!fontsLoaded)
    return <AppLoading/>

  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}
