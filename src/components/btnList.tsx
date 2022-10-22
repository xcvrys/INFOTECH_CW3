import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

export const BtnList = ({DATA}) => {
  const Item = ({title}) => (
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );

  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <FlatList
      data={DATA}
      numColumns={3}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      style={styles.itemList}
    />
  );
};

const styles = StyleSheet.create({
  itemList: {
    // width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 10,
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  item: {
    backgroundColor: '#E5ECF4',
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

// FFFFFF
// EFFFFA
// E5ECF4
// C3BEF7
// 8A4FFF
