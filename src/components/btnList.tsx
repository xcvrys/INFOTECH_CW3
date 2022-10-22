import React, {FC} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {WordsItem} from '../data/Words';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import wordCategories from '../data/WordCategories';
import Tts from 'react-native-tts';

export const BtnList: FC<BtnListProps> = ({data}) => {
  const Item: FC<WordsItem> = ({category, content, icon}) => (
    <TouchableOpacity
      style={[styles.item, {backgroundColor: wordCategories[category]}]}
      onPress={() => {
        Tts.voices().then(voices => console.log(voices));
        Tts.speak(category);
      }}
      activeOpacity={0.6}>
      <MaterialCommunityIcons name={icon} size={48} color={'black'} />
      <Text style={styles.text}>{content}</Text>
    </TouchableOpacity>
  );

  const renderItem: FC<{item: WordsItem}> = ({item}) => <Item {...item} />;

  return (
    <FlatList
      data={data}
      numColumns={3}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      style={styles.itemList}
    />
  );
};

const styles = StyleSheet.create({
  itemList: {
    padding: 10,
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  item: {
    backgroundColor: '#a4b1f4',
    margin: 10,
    width: 100,
    minHeight: 125,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});

interface BtnListProps {
  data: WordsItem[];
}
// FFFFFF
// EFFFFA
// E5ECF4
// C3BEF7
// 8A4FFF
