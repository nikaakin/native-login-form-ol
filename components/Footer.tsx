import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type FooterProps = FC<{
  text: string;
  linkText: string;
  navigate: () => void;
}>;

export const Footer: FooterProps = ({linkText, text, navigate}) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Text style={styles.linkText} onPress={navigate}>
        {linkText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 32,
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
  },
  linkText: {
    color: '#0076FF',
  },
});
