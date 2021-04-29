import React from 'react';
import AppLoading from 'expo-app-loading';

import { useFonts,
        Jost_400Regular,
        Jost_600SemiBold,
        Jost_700Bold } 
from '@expo-google-fonts/jost';
        
import {Login} from './src/pages/Login';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
    Jost_700Bold
  })

  if(!fontsLoaded)
    return <AppLoading/>
    
  return (
    <Login/>
  );
}
