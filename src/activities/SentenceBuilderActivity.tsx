/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {SafeAreaView, Button, StyleSheet, View, Text} from 'react-native';
import {AppNavigatorProps} from '../App';
import {StackScreenProps} from '@react-navigation/stack';
import {BtnList} from '../components/btnList';

const DATA = [
  {
    id: '1',
    title: 'Item 1',
  },
  {
    id: '2',
    title: 'Item 2',
  },
];

export const SentenceBuilderActivity: FC<
  StackScreenProps<AppNavigatorProps, 'sentenceBuilderActivity'>
> = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
      <View style={styles.main}>
        <View style={styles.input}>
          {/*  */}
          <View style={styles.item}>
            <Text>Q</Text>
          </View>
          <View style={styles.item}>
            <Text>W</Text>
          </View>
          <View style={styles.item}>
            <Text>E</Text>
          </View>
          {/*  */}
        </View>
        <View style={styles.buttonList}>
          <View style={styles.button}>
            <Text>Delete</Text>
          </View>
          <View style={styles.button}>
            <Text>Read</Text>
          </View>
        </View>
        <BtnList DATA={DATA} />
        <View style={styles.btn}>
          <Button
            onPress={() => navigation.goBack()}
            color="#8A4FFF"
            title={'go back to view1'}
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
    alignItems: 'center',
  },
  input: {
    height: '10%',
    width: '90%',
    marginTop: '5%',
    backgroundColor: '#C3BEF7',
    borderRadius: 8,
    padding: 10,
    flexDirection: 'row',
  },
  item: {
    backgroundColor: '#E5ECF4',
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
    backgroundColor: '#C3BEF7',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    height: '4.5%',
    width: '100%',
  },
});

// FFFFFF
// EFFFFA
// E5ECF4
// C3BEF7
// 8A4FFF
