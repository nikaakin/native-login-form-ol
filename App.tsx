/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from './screens/Login/Login';
import {StatusBar} from 'react-native';
import {ForgotPassword} from './screens/ForgotPassword';
import {Registration} from './screens/Registration';
import {Home} from './screens/Home';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {RootState, store} from './store';
import {updateTokens} from './store/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const UnauthenticatedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        keyboardHandlingEnabled: true,
        cardStyle: {
          backgroundColor: 'white',
          flex: 1,
        },
      }}>
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
        component={Login}
      />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>
  );
};

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const RootStack = () => {
  const authState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    async () => {
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      const accessToken = await AsyncStorage.getItem('accessToken');

      if (accessToken && refreshToken) {
        dispatch(
          updateTokens({
            accessToken,
            refreshToken,
            isAuthenticated: true,
          }),
        );
      }
    };
  }, []);
  return (
    <NavigationContainer>
      {authState.isAuthenticated ? (
        <AuthenticatedStack />
      ) : (
        <UnauthenticatedStack />
      )}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <RootStack />
    </Provider>
  );
};

export default App;
