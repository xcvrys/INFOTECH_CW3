/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {StyleSheet, View, Button, SafeAreaView} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {AppNavigatorProps} from '../App';
import {BtnList} from '../components/btnList';

const DATA = [
  {
    id: '1',
    title: '1 Item',
  },
  {
    id: '2',
    title: '2 Item',
  },
  {
    id: '3',
    title: '3 Item',
  },
  {
    id: '4',
    title: '4 Item',
  },
  {
    id: '5',
    title: '5 Item',
  },
  {
    id: '6',
    title: '6 Item',
  },
];

export const WordsActivity: FC<
  StackScreenProps<AppNavigatorProps, 'wordsActivity'>
> = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
      <View style={styles.main}>
        <BtnList DATA={DATA} />
        <View style={styles.btn}>
          <Button
            onPress={() => navigation.navigate('sentenceBuilderActivity')}
            color="#8A4FFF"
            title={'go to view2'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
  },
  btn: {
    height: '4.5%',
  },
});

// FFFFFF
// EFFFFA
// E5ECF4
// C3BEF7
// 8A4FFF
