import {StackScreenProps} from '@react-navigation/stack';
import React, {FC} from 'react';
import {Text, SafeAreaView, Pressable, StyleSheet} from 'react-native';
import {AppNavigatorProps} from '../App';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export const OnboardingActivity: FC<
  StackScreenProps<AppNavigatorProps, 'onboardingActivity'>
> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.Title}>Hi👋</Text>
      <Text style={styles.MainText}>Welcome to AAC system</Text>

      <Pressable
        onPress={() => navigation.navigate('wordsActivity')}
        style={styles.btn}>
        <Text style={styles.btnText}>START</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#E7E7E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    height: 75,
    width: 150,
    backgroundColor: '#485696',
    borderRadius: 25,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  Title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    color: '#485696',
  },
  MainText: {
    color: '#000000',
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
});
