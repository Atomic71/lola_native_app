import React from 'react';
import {COPYRIGHT} from '../constants/text';
import commonStyles from '../styles/commonStyles';
import {SmallText} from './common/Typography';

const LolaCopyright = () => {
  return (
    <SmallText textStyles={[commonStyles.centeredText]} content={COPYRIGHT} />
  );
};

export default LolaCopyright;
