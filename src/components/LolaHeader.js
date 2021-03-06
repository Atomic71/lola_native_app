import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LolaLogo from '../assets/logo.svg';
import commonStyles from '../styles/commonStyles';
import {MenuButton, SearchButton} from './common/Buttons';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 20,
  },
  mainNav: {
    marginBottom: 20,
  },
});

const LolaHeader = ({navigation, route, ...rest}) => {
  return (
    <SafeAreaView edges={['left', 'right', 'top']} style={styles.container}>
      <View style={[commonStyles.spreadContainer, styles.mainNav]}>
        <MenuButton onPress={() => navigation.navigate('menuModal')} />
        <LolaLogo />
        <SearchButton onPress={() => navigation.navigate('searchModal')} />
      </View>
    </SafeAreaView>
  );
};

export default LolaHeader;
