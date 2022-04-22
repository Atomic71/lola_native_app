import React from 'react';
import {MENU} from '../../constants/text';
import ModalWrapper from '../common/ModalWrapper';
import MenuFooter from './MenuFooter';
import MenuNavItems from './MenuNavItems';

const MenuModal = ({navigation}) => {
  return (
    <ModalWrapper title={MENU.title} footer={MenuFooter}>
      <MenuNavItems />
    </ModalWrapper>
  );
};

export default MenuModal;
