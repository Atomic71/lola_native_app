import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import commonStyles from '../../styles/commonStyles';
import {CloseButton} from './Buttons';

const styles = StyleSheet.create({
  modalHeader: {
    backgroundColor: 'white',
  },
});
const ModalHeader = props => {
  return (
    <SafeAreaView
      style={[commonStyles.horizontalPadding, styles.modalHeader]}
      edges={['left', 'right', 'top']}>
      <CloseButton onPress={() => props.navigation.goBack()} />
    </SafeAreaView>
  );
};

export default ModalHeader;
