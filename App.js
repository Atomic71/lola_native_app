import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {ScrollView, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {useWindowDimensions} from 'react-native';

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
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        defaultScreenOptions={{
          headerTitleStyle: {
            width,
          },
        }}>
        <Stack.Screen
          name="home"
          component={HomeComponent}
          options={{
            headerTitle: LolaHeader,
            headerBackTitle: null,
            headerBackVisible: false,
            headerTitleStyle: {},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
