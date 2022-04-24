import {
  CommonActions,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
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
  const {dispatch} = useNavigation();
  const navigateToScreen = path => {
    dispatch(StackActions.pop());
    setTimeout(() => {
      dispatch(CommonActions.navigate(path));
    }, 300);
  };
  return MENU.navItems.map(({text, path}) => (
    <TouchableOpacity
      key={text}
      style={[styles.menuItem]}
      onPress={() => navigateToScreen(path)}>
      <Body content={text} />
    </TouchableOpacity>
  ));
};

export default MenuNavItems;
