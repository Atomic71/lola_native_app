import React from 'react';
import {TouchableOpacity} from 'react-native';
import Menu from '../../../assets/menu.svg';

const MenuButton = props => (
  <TouchableOpacity {...props}>
    <Menu />
  </TouchableOpacity>
);

export default MenuButton;
