import React from 'react';
import {View} from 'react-native';
import {TEXT_SIZE} from '../../constants/text';
import {TYPOGRAPHY_DICT} from '../../constants/typographyThemes';
import {useTheme} from '../../context/ThemeContext';
import commonStyles from '../../styles/commonStyles';
import LolaDropdownComponent from '../common/DropdownComponent';
import {Body} from '../common/Typography';

const TextSizeController = props => {
  const {setTypographyTheme, typographyThemeKey} = useTheme();
  const onChangeCb = React.useCallback(
    ({value}) => setTypographyTheme(value),
    [setTypographyTheme],
  );
  return (
    <View {...props} style={[commonStyles.flexRowItems]}>
      <Body content={TEXT_SIZE.title} />
      <LolaDropdownComponent
        value={typographyThemeKey}
        options={Object.values(TYPOGRAPHY_DICT).map(({key: value, label}) => ({
          label,
          value,
        }))}
        onChange={onChangeCb}
      />
    </View>
  );
};
export default TextSizeController;
