import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthorizationScreen } from './AuthorizationScreen';
import { TechnoListScreen } from './TechoListScreen';
import { screen } from '../const';
import { TechnoAddingScreen } from './TechnoAddingScreen';
import { TechnoEditorScreen } from './TechnoEditor';

const { Navigator, Screen } = createStackNavigator();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name={screen.authorization} component={AuthorizationScreen} />
        <Screen name={screen.techoList} component={TechnoListScreen} />
        <Screen name={screen.technoAdding} component={TechnoAddingScreen} />
        <Screen name={screen.editor} component={TechnoEditorScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
