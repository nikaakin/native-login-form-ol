import React from 'react';
import {BurgerIcon} from '../Icons/BurgerIcon';
import {Pressable} from 'react-native';

export const Burger = () => {
  const handlePress = () => console.log('burger clicked');
  return (
    <Pressable onPress={handlePress}>
      <BurgerIcon />
    </Pressable>
  );
};
