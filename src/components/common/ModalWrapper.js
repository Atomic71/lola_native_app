import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import commonStyles from '../../styles/commonStyles';
import {Title} from './Typography';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  menuInner: {
    paddingTop: 55,
  },
  titleWrapper: {
    paddingBottom: 30,
  },
});

const ModalWrapper = ({children, footer, title}) => {
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView style={[styles.menuInner]}>
        <View style={[commonStyles.horizontalPadding, styles.titleWrapper]}>
          {title && <Title content={title} />}
        </View>
        <View style={[commonStyles.horizontalPaddingSmall]}>{children}</View>
      </ScrollView>
      <View style={commonStyles.horizontalPaddingSmall}>
        {footer ? footer() : null}
      </View>
    </SafeAreaView>
  );
};

export default ModalWrapper;
