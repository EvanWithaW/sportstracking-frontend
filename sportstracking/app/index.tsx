import React from 'react';
import {View, Text,Button} from 'react-native';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';


export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.Text} >SportsTracking V1.0</Text>
            <Link href= {
                {
                    pathname: '/(auth)/login',
                }
            }> Login
            </Link>
            <Link href= {
                {
                    pathname: '/(auth)/register',
                }
            }> Register
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text: {
        fontSize: 25,
        fontWeight: 'bold',
    }
});