import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  WordsActivity,
  OnboardingActivity,
  SentenceBuilderActivity,
} from './activities';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useSentenceBuilderStore from './state/SentenceBuilderStore';

const App = () => {
  const AppNavigator = createStackNavigator<AppNavigatorProps>();
  const [firstTime, setFirstTime] = useState(false);
  const onboardingCompleted = useSentenceBuilderStore(
    s => s.onboardingCompleted,
  );

  useEffect(() => {
    AsyncStorage.getItem('firstTime').then(i => {
      setFirstTime(i === null);
    });
  }, [onboardingCompleted]);

  return (
    <NavigationContainer>
      <AppNavigator.Navigator
        initialRouteName={'wordsActivity'}
        screenOptions={{headerShown: false}}>
        {firstTime ? (
          <AppNavigator.Screen
            name="onboardingActivity"
            component={OnboardingActivity}
          />
        ) : (
          <>
            <AppNavigator.Screen
              name="wordsActivity"
              component={WordsActivity}
            />

            <AppNavigator.Screen
              name="sentenceBuilderActivity"
              component={SentenceBuilderActivity}
            />
          </>
        )}
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
};

export type AppNavigatorProps = {
  wordsActivity: undefined;
  sentenceBuilderActivity: undefined;
  onboardingActivity: undefined;
};

export default App;
