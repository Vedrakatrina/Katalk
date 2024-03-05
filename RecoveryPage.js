// RecoveryPage.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image,TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const RecoveryPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <Text style={styles.title}>Restore Password</Text>
        <Text style={styles.subtitle}>
          Enter your email or mobile number and we'll send you a link to get back into your account.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Email or Phone Number"
        />
        <TouchableOpacity
          style={styles.backToLoginButton}
          onPress={() => navigation.navigate('LoginPage')}
        >
          <Text style={styles.backToLoginButtonText}>Send Reset Instructions</Text>
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
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#333333',
    textAlign: 'center',
  },
  backToLoginButton: {
    backgroundColor: '#1877f2', //  blue color
    borderRadius: 8,
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  backToLoginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
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
  alreadyhaveaccount: {
    marginTop: 16,
    marginBottom: 10,
    color: '#1877f2',
    fontSize: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 16,
  },
});

export default RecoveryPage;



