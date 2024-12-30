import React from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import { StyleSheet } from 'react-native';


export default function Home() {
    return (
        <View style={styles.container}>
            <Image style={styles.Image} source={require('@/assets/images/frontscreen.jpeg')} />
            <Text>Welcome to SportsTracking V1.0 created by Evan Weidner</Text>
            
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
    Image: {
        flex: 1,
        resizeMode: "center",
        justifyContent: "center",
        borderCurve: 150,
    },
});