import React from 'react';
import {
    Text, View, ScrollView, StyleSheet,
} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen() {
    return (
    <View style={styles.container}>
        <AppBar />
        <View style={styles.MemoHeader}>
            <Text style={styles.MemoTitle}>買い物リスト</Text>
            <Text style={styles.MemoDate}>2020年12月24日</Text>
        </View>
        <ScrollView style={styles.MemoBody}>
            <Text style={styles.MemoText}>
            買い物リスト
            ああああああああああああああああああああああああああああああああああああああああああああああああああああああ
            </Text>
        </ScrollView>
        <CircleButton style={{ top: 160, bottom: 'auto' }} name="edit-2" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    MemoHeader: {
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19,
    },
    MemoTitle: {
        color: '#FFFFFF',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
    },
    MemoDate: {
        color: '#FFFFFF',
        fontSize: 12,
        lineHeight: 16,
    },
    MemoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
    MemoText: {
        fontSize: 16,
        lineHeight: 24,
    },
});
