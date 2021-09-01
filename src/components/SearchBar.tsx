import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = (): JSX.Element => {
  return (
    <View>
      <TextInput style={styles.input} placeholder="searchbar" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
  },
});

export default SearchBar;
