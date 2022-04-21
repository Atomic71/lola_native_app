import React from 'react';
import {StyleSheet, View} from 'react-native';
import LolaLogo from '../assets/logo.svg';
import MenuButton from './common/buttons/MenuButton';
import SearchButton from './common/buttons/SearchButton';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    marginRight: 20,
    paddingHorizontal: 10,
  },
});

const LolaHeader = () => {
  return (
    <View style={styles.container}>
      <MenuButton />
      <LolaLogo />
      <SearchButton />
    </View>
  );
};

export default LolaHeader;
