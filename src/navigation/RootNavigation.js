import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import ModalHeader from '../components/common/ModalHeader';
import LolaHeader from '../components/LolaHeader';
import MenuModal from '../components/menu/MenuModal';
import SearchModal from '../components/SearchModal';
import {APP_ROUTES} from '../constants/routes';
import HomeView from '../views/HomeView';
import TermsView from '../views/TermsView';

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
        <Stack.Navigator initialRouteName={APP_ROUTES.home}>
          <Stack.Group
            screenOptions={{
              header: LolaHeader,
              animation: 'simple_push',
            }}>
            <Stack.Screen name={APP_ROUTES.home} component={HomeView} />
            <Stack.Screen
              name={APP_ROUTES.terms}
              component={TermsView}
              initialParams={{hideCategories: true}}
            />
          </Stack.Group>
          <Stack.Group
            screenOptions={{
              presentation: 'modal',
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
