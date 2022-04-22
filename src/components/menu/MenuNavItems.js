import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {MENU} from '../../constants/text';
import {Body} from '../common/Typography';

const styles = StyleSheet.create({
  menuItem: {
    marginBottom: 35,
  },
});

const MenuNavItems = () => {
  return MENU.navItems.map(({text}) => (
    <TouchableOpacity>
      <Body styles={[styles.menuItem]} content={text} />
    </TouchableOpacity>
  ));
};

export default MenuNavItems;
