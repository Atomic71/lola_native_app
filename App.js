import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {TYPOGRAPHY_DICT} from './src/constants/typographyThemes';
import {ThemeProvider} from './src/context/ThemeContext';
import RootNavigation from './src/navigation/RootNavigation';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

import('react-query-native-devtools').then(({addPlugin}) => {
  addPlugin({queryClient});
});

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider
          initialTypographyTheme={TYPOGRAPHY_DICT.THEME_NORMAL.key}>
          <RootNavigation />
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
