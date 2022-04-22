import React from 'react';
import {StyleSheet} from 'react-native';
import ModalWrapper from './common/ModalWrapper';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 20,
  },
  mainNav: {
    marginBottom: 20,
  },
});

const MenuModal = ({navigation}) => {
  return <ModalWrapper></ModalWrapper>;
};

export default MenuModal;
