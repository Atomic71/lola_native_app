import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

const ModalWrapper = props => {
  return <ScrollView style={styles.container}>{props.children}</ScrollView>;
};

export default ModalWrapper;
