import React from 'react';
import {Path, Svg} from 'react-native-svg';

export const BurgerIcon = () => {
  return (
    <Svg width="18" height="8" viewBox="0 0 18 8" fill="none">
      <Path d="M18 0H0V2H18V0Z" fill="black" />
      <Path d="M18 6H0V8H18V6Z" fill="black" />
    </Svg>
  );
};
