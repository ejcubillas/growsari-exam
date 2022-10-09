import React from 'react';
import {
  StatusBar,
} from 'react-native';
import {
  NativeBaseProvider,
  extendTheme,
} from 'native-base';
import colors from './src/colors';
import { NavigationContainer } from '@react-navigation/native';
import MainNav from './src/navigation/Main';

const App = () => {
  const theme = extendTheme({
    colors: {
      main: {
        primary: colors.primary,
        secondary: colors.secondary,
        text: colors.text,
        highlight: colors.highlight,
        placeholder: colors.placeholder,
        gray: colors.gray
      },
      
    },
    
  });

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <NavigationContainer>
        <MainNav/>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
