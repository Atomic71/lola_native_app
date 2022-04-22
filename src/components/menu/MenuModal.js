import React from 'react';
import {StyleSheet} from 'react-native';
import {MENU} from '../../constants/text';
import ModalWrapper from '../common/ModalWrapper';
import MenuFooter from './MenuFooter';
import MenuNavItems from './MenuNavItems';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 20,
  },
  mainNav: {
    marginBottom: 20,
  },
  footerWrapper: {
    paddingTop: 18,
  },
});

const MenuModal = ({navigation}) => {
  return (
    <ModalWrapper title={MENU.title} footer={MenuFooter}>
      <MenuNavItems />
    </ModalWrapper>
  );
};

export default MenuModal;
