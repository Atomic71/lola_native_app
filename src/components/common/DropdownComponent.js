import React from 'react';
import {StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import commonStyles from '../../styles/commonStyles';

const styles = StyleSheet.create({
  wrapper: {
    flexShrink: 0,
    borderRadius: 15,
    width: 130,
  },
});

const LolaDropdownComponent = ({options, value, onChange}) => {
  return (
    <Dropdown
      labelField={'label'}
      valueField={'value'}
      onChange={onChange}
      style={[
        styles.wrapper,
        commonStyles.standardBorder,
        commonStyles.horizontalPaddingTiny,
      ]}
      data={options}
      value={value}
      dropdownPosition={'auto'}
    />
  );
};

export default LolaDropdownComponent;
