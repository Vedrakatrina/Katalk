// RegistrationPage.js

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RegistrationPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      
        <Text style={styles.title}>Create a New Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
        />
        <TextInput
          style={styles.input}
          placeholder="Email or Mobile Number"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('LoginPage')}
        >
          <Text style={styles.registerButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginPage')}
        >
          <Text style={styles.alreadyhaveaccount}>Already have an account? Log in</Text>
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
    width: 120,
    height: 120,
    marginBottom: 20,
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
  registerButton: {
    width: '100%',
    backgroundColor: '#42b72a', // green color
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  alreadyhaveaccount: {
    marginTop: 16,
    marginBottom: 10,
    color: '#1877f2',
    fontSize: 16,
  },
});

export default RegistrationPage;



