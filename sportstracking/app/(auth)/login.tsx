import React, { useState } from "react";
import { View, Text, TextInput, Button, } from "react-native";
import { StyleSheet, Pressable } from "react-native";
import * as SecureStore from 'expo-secure-store';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={style.container}>
            <Text style={style.Text}>Welcome Back</Text>
            <TextInput style={style.loginBoxes}  autoCapitalize="none" autoCorrect={false} placeholder="Email" onChangeText={newText => setEmail(newText)} />
            <TextInput style={style.loginBoxes} autoCapitalize="none" autoCorrect={false} secureTextEntry placeholder="Password" onChangeText={newText => setPassword(newText)} />
            <Pressable>
                <Text onPress={() => sendLoginRequest(email, password)}>Login</Text>
             </Pressable>
        </View>
    );
}

async function sendLoginRequest(email: string, password: string) {
    // Handle login logic here
    const resp = await fetch('http://localhost:5001/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password
        }),
    });

    if (!resp.ok) {
        throw new Error('Network response failed');
    }
    const data = await resp.json();

    const { token, refresh_token  } = data;

    SecureStore.setItemAsync('token', token);
    SecureStore.setItemAsync('refresh_token', refresh_token);
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    Text: {
        fontSize: 25,
        fontWeight: 'bold',
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