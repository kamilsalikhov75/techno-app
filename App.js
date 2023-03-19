import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { default as theme } from './theme.json';
import { AppNavigator } from './screens/AppNavigator';

export default () => (
  <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
    <AppNavigator></AppNavigator>
  </ApplicationProvider>
);
