import React, { useState, useCallback } from 'react';
import { View, FlatList, StyleSheet, RefreshControl } from 'react-native';
import LanguageItem from '/home/observer/ProgrammingProjects/ReactNative/PracticeN3WithTabs/components/LanguageItem.tsx';

const langs = [
    { id: '1', lang: 'JavaScript', experience: '1 год опыта', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { id: '2', lang: 'Python', experience: '6 месяцев опыта', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/440px-Python_logo_and_wordmark.svg.png' },
    { id: '3', lang: 'Java', experience: '2 года опыта', imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/3/39/Java_logo.svg/242px-Java_logo.svg.png' },
];

export default function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % langs.length);
            setRefreshing(false);
        }, 1000);
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={[langs[currentIndex]]}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <LanguageItem lang={item.lang} experience={item.experience} imageUrl={item.imageUrl} />
                )}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
});