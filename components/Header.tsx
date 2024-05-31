import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Burger} from './Burger';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo-blc.png')} />
      <Burger />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
