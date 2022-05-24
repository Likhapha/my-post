import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import React from 'react'



export default function Post({ text, emoji }) {
    const [count, setCount] = useState(0);

    let AddCount = () => {
        setCount(count + 1)
    }
    return (
        <View style={styles.container}>
            <View style={styles.mytext}>
                <Text >{text}</Text>
            </View>
            <Text>{emoji}</Text>

            <TouchableOpacity onPress={AddCount}>
                <Text>{count}Like</Text>
                <View style={styles.like}>

                    <AntDesign name="like1" size={24} color="black" /><Text style={styles.hot}>Like </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderColor: 'black',
        padding: 15,
        marginBottom: 5,
        height: 100

    },

    mytext: {
        padding: 10,
        borderWidth: 1,
        height: 50,
        width: '100%',
        marginVertical: 2

    },

    line: {
        height: '90%',
        width: '100%'
    },

    like: {
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#3a37c5',
        justifyContent: 'center',
        height: 20

    },
    hot: {
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'space-around',


    }
})
