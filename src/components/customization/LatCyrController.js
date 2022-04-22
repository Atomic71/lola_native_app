import React from 'react';
import {View} from 'react-native';
import {LAT_CYR} from '../../constants/text';
import {Body} from '../common/Typography';

const LatCyrController = () => {
  return (
    <View>
      <Body content={LAT_CYR.title} />
    </View>
  );
};
export default LatCyrController;
