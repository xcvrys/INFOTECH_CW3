import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {WordsActivity, OnboardingActivity} from './activities';
import {createStackNavigator} from '@react-navigation/stack';
//@ts-ignore
import {AsyncStorage} from 'react-native-async-storage';

const App = () => {
  const AppNavigator = createStackNavigator<AppNavigatorProps>();
  const [firstTime, setFirstTime] = React.useState(true);

  useEffect(() => {
    AsyncStorage.getItem('firstTime').then(value => {
      if (value === 'true') {
        setFirstTime(false);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator.Navigator
        initialRouteName={'onboardingActivity'}
        screenOptions={{headerShown: false}}>
        <AppNavigator.Screen name="wordsActivity" component={WordsActivity} />
        {firstTime ? (
          <AppNavigator.Screen
            name="onboardingActivity"
            component={OnboardingActivity}
            options={{headerShown: false}}
          />
        ) : (
          <AppNavigator.Screen
            name="wordsActivity"
            component={WordsActivity}
            options={{headerShown: false}}
          />
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
