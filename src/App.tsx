import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  SentenceBuilderActivity,
  WordsActivity,
  OnboardingActivity,
} from './activities';
import {createStackNavigator} from '@react-navigation/stack';

const App = () => {
  const AppNavigator = createStackNavigator<AppNavigatorProps>();
  return (
    <NavigationContainer>
      <AppNavigator.Navigator
        initialRouteName={'onboardingActivity'}
        screenOptions={{headerShown: false}}>
        <AppNavigator.Screen name="wordsActivity" component={WordsActivity} />
        <AppNavigator.Screen
          name={'sentenceBuilderActivity'}
          component={SentenceBuilderActivity}
        />
        <AppNavigator.Screen
          name="onboardingActivity"
          component={OnboardingActivity}
        />
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
};

export type AppNavigatorProps = {
  wordsActivity: undefined;
  sentenceBuilderActivity: undefined;
};

export default App;
