/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {StyleSheet, View, SafeAreaView, Pressable, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {AppNavigatorProps} from '../App';
import {BtnList} from '../components/btnList';
import ButtonItem from '../types/ButtonItem';

const DATA: ButtonItem[] = [
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
  {
    id: '7',
    title: '7 Item',
  },
  {
    id: '8',
    title: '8 Item',
  },
  {
    id: '9',
    title: '9 Item',
  },
  {
    id: '10',
    title: '10 Item',
  },

  {
    id: '11',
    title: '11 Item',
  },
  {
    id: '12',
    title: '12 Item',
  },
  {
    id: '13',
    title: '13 Item',
  },
  {
    id: '14',
    title: '14 Item',
  },
  {
    id: '15',
    title: '15 Item',
  },
  {
    id: '16',
    title: '16 Item',
  },
  {
    id: '17',
    title: '17 Item',
  },
  {
    id: '18',
    title: '18 Item',
  },
  {
    id: '19',
    title: '19 Item',
  },
  {
    id: '20',
    title: '20 Item',
  },
];

export const WordsActivity: FC<
  StackScreenProps<AppNavigatorProps, 'wordsActivity'>
> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <BtnList DATA={DATA} />
      <View style={styles.btn}>
        <Pressable
          onPress={() => navigation.navigate('sentenceBuilderActivity')}
          style={styles.button}>
          <Text style={styles.buttonText}>Create Your own</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E7E7E7',
  },
  btn: {
    width: '100%',
    height: '7%',
    backgroundColor: '#485696',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

// FFFFFF
// EFFFFA
// E5ECF4
// C3BEF7
// 9f70ff
// 8A4FFF
