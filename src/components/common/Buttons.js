import React from 'react';
import {TouchableOpacity} from 'react-native';

import Close from '../../assets/close.svg';
import Search from '../../assets/search.svg';
import Menu from '../../assets/menu.svg';

const WrappedButton = BtnImg => props => {
  return (
    <TouchableOpacity {...props}>
      <BtnImg />
    </TouchableOpacity>
  );
};

export const SearchButton = WrappedButton(Search);
export const MenuButton = WrappedButton(Menu);
export const CloseButton = WrappedButton(Close);
