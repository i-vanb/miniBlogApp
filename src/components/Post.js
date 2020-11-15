import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export const Post = ({post}) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.image}
                source={{uri: post.img}}
            >
                <View style={styles.textSection}>
                    <Text style={styles.text}>{post.date}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200
    },
    textSection: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 5
    },
    text: {
        color: '#fff',
        fontFamily: 'merriweather-regular'
    }
})
