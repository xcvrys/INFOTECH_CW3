import React, {FC} from 'react';
import {SafeAreaView, Text, Button, View} from 'react-native';
import {AppNavigatorProps} from '../App';
import {StackScreenProps} from '@react-navigation/stack';

export const SentenceBuilderActivity: FC<
  StackScreenProps<AppNavigatorProps, 'sentenceBuilderActivity'>
> = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text style={{textAlign: 'center', fontSize: 48}}>view2</Text>
      <View style={{marginTop: '5%'}}>
        <Button
          onPress={() => navigation.goBack()}
          title={'go back to view1'}
        />
      </View>
    </SafeAreaView>
  );
};
