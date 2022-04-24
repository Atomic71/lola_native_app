import React from 'react';
import {TouchableOpacity} from 'react-native';

import Close from '../../assets/close.svg';
import Search from '../../assets/search.svg';
import Menu from '../../assets/menu.svg';
import ArrowRight from '../../assets/arrowRight.svg';
import ArrowBack from '../../assets/arrowBack.svg';

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
export const ArrowRightButton = WrappedButton(ArrowRight);
export const BackButton = WrappedButton(ArrowBack);
