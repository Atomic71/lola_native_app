import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  TYPOGRAPHY_DICT,
  TYPOGRAPHY_KEYS,
} from '../../constants/typographyThemes';
import {useTheme} from '../../context/ThemeContext';

const createStyles = theme => {
  return StyleSheet.create(theme);
};

const createText = themeKey =>
  function TextComponent({textStyles = [], content, numberOfLines}) {
    const {typographyThemeKey} = useTheme();

    const themeStyles = React.useMemo(
      () => createStyles(TYPOGRAPHY_DICT[typographyThemeKey].themeConfig),
      [typographyThemeKey],
    );

    return (
      <Text
        style={[...textStyles, themeStyles[themeKey]]}
        numberOfLines={numberOfLines}
        ellipsizeMode="tail">
        {content}
      </Text>
    );
  };

const {TITLE, SUBTTITLE, BODY, SMALL_TEXT, LARGE_TEXT} = TYPOGRAPHY_KEYS;

export const Title = createText(TITLE);
export const Subtitle = createText(SUBTTITLE);

export const Body = createText(BODY);
export const SmallText = createText(SMALL_TEXT);
export const LargeText = createText(LARGE_TEXT);
