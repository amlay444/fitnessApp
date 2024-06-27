// @ts-nocheck
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import { useState } from 'react';
import { useAuth } from 'providers/AuthContext';


const SignUpScreen = () => {
  const [localUsername, setLocalUsername] = useState('');
  const [localPassword, setLocalPassword] = useState('');
  const [localConfirmPassword, setLocalConfirmPassword] = useState('');
  const { setUsername, setPassword, username } = useAuth();

  const onSignUp = () => {
    if (localPassword !== localConfirmPassword) {
      alert('Passwords do not match');
      return;
    }
    setUsername(localUsername);
    setPassword(localPassword);
  };

  if (username) {
    return <Redirect href={'/'} />;
  }

  return (
    <View style={styles.page}>
      <Stack.Screen options={{ title: 'Sign up' }} />

      <Text style={styles.label}>Username</Text>
      <TextInput
        value={localUsername}
        onChangeText={setLocalUsername}
        placeholder="Username"
        style={styles.input}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        value={localPassword}
        onChangeText={setLocalPassword}
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
      />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        value={localConfirmPassword}
        onChangeText={setLocalConfirmPassword}
        placeholder="Confirm Password"
        secureTextEntry={true}
        style={styles.input}
      />

      <Button title="Sign up" onPress={onSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    gap: 10,
    backgroundColor: 'white',
  },
  label: {
    fontWeight: '600',
    fontSize: 20,
    color: 'dimgray',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    padding: 10,
    borderRadius: 5,
  },
});

export default SignUpScreen;