import React from 'react';
import {StyleSheet, View} from 'react-native';
import commonStyles from '../../styles/commonStyles';
import LatCyrController from '../customization/LatCyrController';
import TextSizeController from '../customization/TextSizeController';
import LolaCopyright from '../LolaCopyright';

const styles = StyleSheet.create({
  footerWrapper: {
    paddingTop: 18,
  },
  controllerSpacing: {
    marginBottom: 10,
  },
  controllerSpacingLarge: {
    marginBottom: 40,
  },
});

const MenuFooter = () => {
  return (
    <View
      style={[
        commonStyles.borderTop,
        commonStyles.horizontalPaddingSmall,
        styles.footerWrapper,
      ]}>
      <TextSizeController style={styles.controllerSpacing} />
      <LatCyrController style={styles.controllerSpacingLarge} />
      <LolaCopyright />
    </View>
  );
};

export default MenuFooter;
