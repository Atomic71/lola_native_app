import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {ScrollView, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {useWindowDimensions} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import LolaHeader from './src/components/LolaHeader';
const Stack = createNativeStackNavigator();
const HomeComponent = () => {
  return (
    <ScrollView>
      <Text>Hello world</Text>
    </ScrollView>
  );
};
const App = () => {
  const {width} = useWindowDimensions();
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          defaultScreenOptions={{
            headerStyle: {
              width,
            },
          }}>
          <Stack.Screen
            name="home"
            component={HomeComponent}
            options={{
              header: LolaHeader,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
