import React, {FC} from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {AppNavigatorProps} from '../App';

export const WordsActivity: FC<
  StackScreenProps<AppNavigatorProps, 'wordsActivity'>
> = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text style={{textAlign: 'center', fontSize: 48, marginVertical: '5%'}}>
        elo
      </Text>
      <Text style={{textAlign: 'center', fontSize: 48}}>view1</Text>
      <View style={{marginTop: '5%'}}>
        <Button
          onPress={() => navigation.navigate('sentenceBuilderActivity')}
          title={'go to view2'}
        />
      </View>
    </SafeAreaView>
  );
};
