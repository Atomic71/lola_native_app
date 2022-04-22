import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import LolaCategories from '../components/LolaCategories';
import commonStyles from '../styles/commonStyles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

const HomeView = () => {
  return (
    <View style={[styles.container, commonStyles.horizontalPadding]}>
      <LolaCategories />
      {/* <ScrollView style={{}}></ScrollView> */}
    </View>
  );
};

export default HomeView;
