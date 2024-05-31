import React from 'react';
import {Button, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../store/authSlice';
import {AppDispatch} from '../store';

export const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <View>
      <Button title="logout" onPress={() => dispatch(logout())} />
    </View>
  );
};
