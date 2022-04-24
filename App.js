import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {TYPOGRAPHY_DICT} from './src/constants/typographyThemes';
import {ThemeProvider} from './src/context/ThemeContext';
import RootNavigation from './src/navigation/RootNavigation';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);
  return (
    <SafeAreaProvider>
      <ThemeProvider initialTypographyTheme={TYPOGRAPHY_DICT.THEME_NORMAL.key}>
        <RootNavigation />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
