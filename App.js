import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { First } from './screens/First';
import { Second } from './screens/Second';

const AppStack = createSharedElementStackNavigator();

export default () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStack.Navigator
          initialRouteName="First"
          screenOptions={{ headerShown: false }}>
          <AppStack.Screen component={First} name="First" />
          <AppStack.Screen component={Second} name="Second" />
        </AppStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
