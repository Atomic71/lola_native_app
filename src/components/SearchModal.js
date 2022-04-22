import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SEARCH} from '../constants/text';
import commonStyles from '../styles/commonStyles';
import SearchInput from './common/SearchInput';
import {Title} from './common/Typography';
const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 20,
  },
  mainNav: {
    marginBottom: 20,
  },
  menuInner: {
    paddingTop: 55,
  },
});

const SearchModal = ({navigation}) => {
  return (
    <SafeAreaView
      style={[
        commonStyles.horizontalPadding,
        commonStyles.commonScreen,
        styles.menuInner,
      ]}
      edges={['bottom', 'left', 'right']}>
      {<Title content={SEARCH.title} />}
      <ScrollView style={[styles.menuInner]}>
        <View style={[]}>
          <SearchInput />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchModal;
