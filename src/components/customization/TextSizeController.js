import React from 'react';
import {View} from 'react-native';
import {TEXT_SIZE} from '../../constants/text';
import {Body} from '../common/Typography';

const TextSizeController = props => {
  return (
    <View {...props}>
      <Body content={TEXT_SIZE.title} />
    </View>
  );
};
export default TextSizeController;
