import React, {useState} from 'react';
import {
  KeyboardTypeOptions,
  Pressable,
  StyleSheet,
  Image,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

type InputProps = {
  value: string;
  onChange: (_: string) => void;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  isSecure?: boolean;
};

export const Input = ({
  value,
  onChange,
  placeholder,
  isSecure = false,
  keyboardType = 'default',
}: InputProps) => {
  const [shouldSecure, setShouldSecure] = useState(true);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={isSecure && shouldSecure}
        placeholderTextColor="black"
      />
      {isSecure && (
        <Pressable
          style={styles.icon}
          onPress={setShouldSecure.bind(null, !shouldSecure)}>
          {shouldSecure ? (
            <Image source={require('../assets/eye-slash.png')} />
          ) : (
            <Image source={require('../assets/eye.png')} />
          )}
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    borderRadius: 24,
  },
  input: {
    color: 'black',
    fontSize: 12,
    padding: 22,
    flex: 1,
  },
  icon: {
    width: 32,
    height: 32,
    backgroundColor: 'rgba(147, 147, 147, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 22,
    borderRadius: 12,
  },
});
