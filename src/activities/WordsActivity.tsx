/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {StyleSheet, View, SafeAreaView, Pressable, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {AppNavigatorProps} from '../App';
import {BtnList} from '../components/btnList';
import Words from '../data/Words';

export const WordsActivity: FC<
  StackScreenProps<AppNavigatorProps, 'wordsActivity'>
> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <BtnList data={Words} />
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
