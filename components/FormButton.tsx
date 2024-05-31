import React, {FC, PropsWithChildren} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

type FormButtonProps = FC<PropsWithChildren<{handlePress: () => void}>>;

export const FormButton: FormButtonProps = ({children, handlePress}) => {
  return (
    <Pressable
      onPress={handlePress}
      style={({pressed}) => [styles.container, pressed && styles.pressed]}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(198, 43, 39, 0.2)',
    borderRadius: 16,
    paddingVertical: 16,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    textAlign: 'center',
    color: 'rgba(198, 43, 39, 1)',
  },
});
