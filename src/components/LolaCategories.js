import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import categories from '../constants/categories';
import {APP_ROUTES} from '../constants/routes';

import commonStyles from '../styles/commonStyles';

const LolaCategories = ({wrapperStyles = []}) => {
  const {navigate} = useNavigation();
  return (
    <View style={[commonStyles.spreadContainer, ...wrapperStyles]}>
      {categories.map(({image: SvgImg, key}) => {
        return (
          <TouchableOpacity
            key={key}
            onPress={() => navigate(APP_ROUTES.category, {category: key})}>
            <SvgImg />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default LolaCategories;
