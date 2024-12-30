import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Call useRouter at the top level of the component
  const router = useRouter();

  // Define handleRegister function within the component
  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:5001/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          username,
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      Alert.alert('Success', 'Registration successful, check your email for verification!');

      // Use the router object to navigate
      router.navigate('../');
      
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Join SportsTracking</Text>
      <TextInput
        style={styles.loginBoxes}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.loginBoxes}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.loginBoxes}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.loginBoxes}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.loginBoxes}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  Text: {
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBoxes: {
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 50,
    margin: 10,
    borderRadius: 10,
    color: 'black',
  }
});
