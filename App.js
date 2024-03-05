// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import RecoveryPage from './RecoveryPage';
import RegistrationPage from './RegistrationPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingPage" headerShown="false">
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="RecoveryPage" component={RecoveryPage} />
          <Stack.Screen name="RegistrationPage" component={RegistrationPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

