import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LanguageItem = ({ lang, experience, imageUrl }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="contain" />
            <View style={styles.textContainer}>
                <Text style={styles.langText}>{lang}</Text>
                <Text style={styles.expText}>{experience}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        overflow: 'hidden',
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    image: {
        width: '100%',
        height: 200,
    },
    textContainer: {
        padding: 16,
    },
    langText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    expText: {
        fontSize: 14,
        color: '#888888',
        marginTop: 4,
    },
});

export default LanguageItem;