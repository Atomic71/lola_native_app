import React from 'react';
import {TouchableOpacity} from 'react-native';
import Close from '../../../assets/close.svg';

const CloseButton = props => (
  <TouchableOpacity {...props}>
    <Close />
  </TouchableOpacity>
);

export default CloseButton;
