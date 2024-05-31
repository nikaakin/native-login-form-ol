import React, {FC, PropsWithChildren} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

type TextLinkProps = FC<PropsWithChildren<{navigate: () => void}>>;

export const TextLink: TextLinkProps = ({navigate, children}) => {
  return (
    <Pressable onPress={navigate}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#0076FF',
    fontSize: 11,
    lineHeight: 12.65,
  },
});
