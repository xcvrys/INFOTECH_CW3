import {StackScreenProps} from '@react-navigation/stack';
import React, {FC} from 'react';
import {
  // StyleSheet,
  Text,
  SafeAreaView,
  Button,
} from 'react-native';
import {AppNavigatorProps} from '../App';

export const OnboardingActivity: FC<
  StackScreenProps<AppNavigatorProps, 'onboardingActivity'>
> = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>siema</Text>
      <Button
        title="Click"
        onPress={() => navigation.navigate('wordsActivity')}
      />
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({});

// FFFFFF
// EFFFFA
// E5ECF4
// C3BEF7
// 8A4FFF
