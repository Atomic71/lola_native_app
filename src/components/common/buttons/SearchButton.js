import React from 'react';
import {TouchableOpacity} from 'react-native';
import Search from '../../../assets/search.svg';

const SearchButton = props => (
  <TouchableOpacity {...props}>
    <Search />
  </TouchableOpacity>
);

export default SearchButton;
