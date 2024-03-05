// LoginPage.js

import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
        />
        {/* <Text style={styles.title}>Log in to My App</Text> */}
        <TextInput
          style={styles.input}
          placeholder="Email or Phone Number"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('HomePage')}
        >
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('RecoveryPage')}
        >
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('RegistrationPage')}
        >
          <Text style={styles.forgotPassword}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff', // Background color of safe area
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 450,
    height: 450,
    marginBottom: -150,
    marginTop: -150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1877f2', //  blue color
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#dcdfe6',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    padding: 10,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#1877f2',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: 16,
    marginBottom: 10,
    color: '#1877f2',
    fontSize: 16,
  },
});

export default LoginPage;

