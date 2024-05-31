import React, {FC, PropsWithChildren} from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';

type FormTitleProps = PropsWithChildren<{imgUrl: ImageSourcePropType}>;

export const FormTitle: FC<FormTitleProps> = ({imgUrl, children}) => {
  return (
    <View style={styles.container}>
      <Image source={imgUrl} style={styles.img} resizeMode="contain" />
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  img: {
    width: '100%',
    height: 175,
  },
  text: {
    textAlign: 'center',
    marginTop: 24,
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 26,
    color: 'black',
  },
});
