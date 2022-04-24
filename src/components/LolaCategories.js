import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import categories from '../constants/categories';

import commonStyles from '../styles/commonStyles';

const LolaCategories = ({wrapperStyles = []}) => {
  return (
    <View style={[commonStyles.spreadContainer, ...wrapperStyles]}>
      {categories.map(({image: SvgImg, key}) => {
        return (
          <TouchableOpacity key={key}>
            <SvgImg />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default LolaCategories;
