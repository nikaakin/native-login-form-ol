import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {resetTokes, login} from '../../store/authSlice';
import {AppDispatch} from '../../store';

export const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProp<Record<string, undefined>>>();
  const dispatch = useDispatch<AppDispatch>();

  const changeUsername = (newUsername: string) => {
    setUsername(newUsername);
  };

  const changePassword = (newPassword: string) => {
    setPassword(newPassword);
  };

  const navigateTo = (screen: string) => navigation.navigate(screen);

  const handleSubmit = async () => {
    try {
      await dispatch(
        login({
          password,
          username,
        }),
      );
    } catch (e) {
      dispatch(resetTokes());
      Alert.alert('Wrong Credential', 'usename or password is wrong');
    }
  };

  const image = require('./../../assets/log_in_backgroud.png');

  return {
    username,
    password,
    changePassword,
    changeUsername,
    image,
    navigateTo,
    handleSubmit,
  };
};
