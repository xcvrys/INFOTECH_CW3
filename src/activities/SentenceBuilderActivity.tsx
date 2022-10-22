/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Pressable} from 'react-native';
import {AppNavigatorProps} from '../App';
import {StackScreenProps} from '@react-navigation/stack';
import {BtnList} from '../components/btnList';
import ButtonItem from '../types/ButtonItem';
import Words from '../data/Words';
import Tts from 'react-native-tts';
import useSentenceBuilderStore from '../state/SentenceBuilderStore';
import generateRandomID from '../utils/randomid';

export const SentenceBuilderActivity: FC<
  StackScreenProps<AppNavigatorProps, 'sentenceBuilderActivity'>
> = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
      <View style={styles.main}>
        <SentenceVisualizer />
        <View style={styles.buttonList}>
          <Pressable
            style={styles.button}
            onPress={() => useSentenceBuilderStore.getState().removeLastWord()}>
            <Text style={styles.buttonText}>Back</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={readSentence}>
            <Text style={styles.buttonText}>Read</Text>
          </Pressable>
        </View>
        <BtnList data={Words} />
        <View style={styles.btn}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.navButton}>
            <Text style={styles.NavbuttonText}>Static sentenres</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const SentenceVisualizer: FC = () => {
  const sentence = useSentenceBuilderStore(st => st.sentence);
  return (
    <View style={styles.input}>
      {sentence.map(w => (
        <View key={generateRandomID()} style={styles.item}>
          <Text>{w}</Text>
        </View>
      ))}
    </View>
  );
};

const readSentence = () => {
  const sentence = useSentenceBuilderStore.getState().sentence;
  Tts.speak(sentence.join(' '));
  useSentenceBuilderStore.getState().clearSentence();
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  input: {
    height: '10%',
    width: '90%',
    marginTop: '5%',
    backgroundColor: '#485696',
    borderRadius: 8,
    padding: 10,
    flexDirection: 'row',
  },
  item: {
    backgroundColor: '#a4b1f4',
    paddingHorizontal: 15,
    height: '100%',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  buttonList: {
    height: '8%',
    width: '90%',
    marginTop: '1%',
    borderRadius: 8,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    width: '40%',
    height: '100%',
    backgroundColor: '#485696',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: '100%',
    height: '7%',
    backgroundColor: '#485696',
  },
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  NavbuttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

// FFFFFF
// EFFFFA
// E5ECF4
// C3BEF7
// 8A4FFF
