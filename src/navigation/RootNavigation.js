import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import ModalHeader from '../components/common/ModalHeader';
import LolaHeader from '../components/LolaHeader';
import MenuModal from '../components/menu/MenuModal';
import SearchModal from '../components/SearchModal';
import HomeView from '../views/HomeView';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Group>
            <Stack.Screen
              name="home"
              component={HomeView}
              options={{
                header: LolaHeader,
              }}
            />
          </Stack.Group>
          <Stack.Group
            screenOptions={{
              presentation: 'fullScreenModal',
              header: ModalHeader,
              headerBackground: 'red',
            }}>
            <Stack.Screen name="searchModal" component={SearchModal} />
            <Stack.Screen name="menuModal" component={MenuModal} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigation;
