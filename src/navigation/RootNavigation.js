import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import ModalHeader from '../components/common/ModalHeader';
import LolaHeader from '../components/LolaHeader';
import MenuModal from '../components/menu/MenuModal';
import CategoryHeader from '../components/screenHeaders/CategoryHeader';
import SearchModal from '../components/SearchModal';
import {APP_ROUTES} from '../constants/routes';
import AboutView from '../views/AboutView';
import AuthorsView from '../views/AuthorsView';
import AuthorView from '../views/AuthorView';
import CategoryView from '../views/CategoryView';
import HomeView from '../views/HomeView';
import PostView from '../views/PostView';
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
            <Stack.Screen name={APP_ROUTES.terms} component={TermsView} />
            <Stack.Screen name={APP_ROUTES.about} component={AboutView} />
            <Stack.Screen name={APP_ROUTES.authors} component={AuthorsView} />
            <Stack.Screen
              name={APP_ROUTES.author}
              component={AuthorView}
              options={{headerShown: false}}
            />
            <Stack.Screen name={APP_ROUTES.post} component={PostView} />
            <Stack.Screen
              name={APP_ROUTES.category}
              component={CategoryView}
              options={{
                header: CategoryHeader,
              }}
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
