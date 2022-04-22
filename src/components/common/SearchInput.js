import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import commonStyles from '../../styles/commonStyles';
import {CloseButton, SearchButton} from './Buttons';

const styles = StyleSheet.create({
  inputWrapper: {
    borderColor: '#252932',
    borderWidth: 1,
    height: 40,
  },
  input: {
    flex: 1,
    color: '#252932',
  },
});

const SearchInput = () => {
  return (
    <View
      style={[
        commonStyles.skewLeftBorder,
        styles.inputWrapper,
        commonStyles.flexRowItems,
        commonStyles.horizontalPaddingTiny,
      ]}>
      <SearchButton />
      <TextInput
        style={[styles.input, commonStyles.horizontalPaddingTiny]}
        selectionColor={'#252932'}
      />
      <CloseButton />
    </View>
  );
};

export default SearchInput;
