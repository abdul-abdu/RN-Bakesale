import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import DealItem from './DealItem';

type Props = {
  deals: any[];
  onItemPress: Function;
};

const DealList = ({deals, onItemPress}: Props) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={deals}
        renderItem={({item}) => (
          <DealItem key={item.key} deal={item} onPress={onItemPress} />
        )}
      />
    </View>
  );
};

export default DealList;

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee',
    flex: 1,
    paddingTop: 50,
    width: '100%',
  },
});
