import React from 'react';
import {View} from 'react-native';
import LolaCategories from '../components/LolaCategories';
import commonStyles from '../styles/commonStyles';

const HomeView = () => {
  return (
    <View style={[commonStyles.horizontalPadding, commonStyles.commonScreen]}>
      <LolaCategories />
      {/* <ScrollView style={{}}></ScrollView> */}
    </View>
  );
};

export default HomeView;
