import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import ExpoAppLoading from 'expo-app-loading';

import { AsyncStorageProvider } from './src/context/contextAsyncStorage';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/global/styles/theme';
import { AppRoutes } from './src/routes/app.routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded) {
    return <ExpoAppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <AsyncStorageProvider>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </AsyncStorageProvider>
    </ThemeProvider>
  )
}
