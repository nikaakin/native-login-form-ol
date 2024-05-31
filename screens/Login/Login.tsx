import React from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import {Header} from '../../components/Header';
import {FormTitle} from '../../components/FormTitle';
import {Input} from '../../components/Input';
import {TextLink} from '../../components/TextLink';
import {useLogin} from './useLogin';
import {FormButton} from '../../components/FormButton';
import {Footer} from '../../components/Footer';

export const Login = () => {
  const {
    changePassword,
    changeUsername,
    image,
    navigateTo,
    password,
    username,
    handleSubmit,
  } = useLogin();

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View style={styles.margin}>
          <Header />
          <View style={styles.titleContainer}>
            <FormTitle imgUrl={image}>გამარჯობა</FormTitle>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.formInput}>
              <Input
                value={username}
                onChange={changeUsername}
                placeholder="მომხმარებელი"
              />
            </View>
            <View>
              <Input
                value={password}
                onChange={changePassword}
                placeholder="პაროლი"
                isSecure
              />
            </View>
          </View>

          <View style={styles.forgotPasswordContainer}>
            <TextLink navigate={navigateTo.bind(null, 'ForgotPassword')}>
              დაგავიწყდა პაროლი?
            </TextLink>
          </View>

          <FormButton handlePress={handleSubmit}>ავტორიზაცია</FormButton>
        </View>
        <View style={styles.footerContainer}>
          <Footer
            text="არ გაქვს ანგარიში?"
            linkText="რეგისტრაცია"
            navigate={navigateTo.bind(null, 'Registration')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  margin: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  titleContainer: {
    marginTop: 38,
  },
  formContainer: {
    marginTop: 50,
  },
  formInput: {
    marginBottom: 32,
  },
  forgotPasswordContainer: {
    marginTop: 8,
    marginBottom: 20,
    alignItems: 'flex-end',
  },
  footerContainer: {
    width: '100%',
    marginTop: 64,
  },
});
