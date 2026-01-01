import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import StockScreen from './StockScreen';
import RecipeScreen from './RecipeScreen';
import PlanScreen from './PlanScreen';
import MenuScreen from './MenuScreen';
import { FoodItem } from '../types/food';

const allItems: FoodItem[] = [
    { id: 1, name: 'ほうれん草', category: '野菜', daysLeft: 1, totalDays: 5, quantity: '1束', status: 'critical', location: 'refrigerator', icon: '🥬' },
    { id: 2, name: '卵', category: '乳製品', daysLeft: 3, totalDays: 14, quantity: '6個', status: 'warning', location: 'refrigerator', icon: '🥚' },
    { id: 3, name: '鶏もも肉', category: '肉類', daysLeft: 0, totalDays: 3, quantity: '300g', status: 'expired', location: 'refrigerator', icon: '🍗' },
    { id: 4, name: '牛乳', category: '飲み物', daysLeft: 5, totalDays: 7, quantity: '500ml', status: 'safe', location: 'refrigerator', icon: '🥛' },
    { id: 5, name: '冷凍うどん', category: '麺類', daysLeft: 30, totalDays: 60, quantity: '5食', status: 'safe', location: 'freezer', icon: '🍜' },
    { id: 6, name: '豚ひき肉', category: '肉類', daysLeft: 14, totalDays: 20, quantity: '200g', status: 'safe', location: 'freezer', icon: '🥓' },
    { id: 7, name: '玉ねぎ', category: '野菜', daysLeft: 10, totalDays: 20, quantity: '3個', status: 'safe', location: 'pantry', icon: '🧅' },
    { id: 8, name: 'パスタ', category: '乾物', daysLeft: 120, totalDays: 365, quantity: '1袋', status: 'safe', location: 'pantry', icon: '🍝' },
];

export default function HomeScreen() {
    const [activeTab, setActiveTab] = useState('stock');

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#EAECE9" translucent={true} />

            {/* ヘッダー背景装飾 */}
            <View style={styles.headerBackground} />

            {/* ナビゲーションバー */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>キッチン日和</Text>
            </View>

            {/* メインコンテンツ */}
            <View style={styles.mainContent}>
                {activeTab === 'stock' && <StockScreen items={allItems} />}
                {activeTab === 'recipe' && <RecipeScreen />}
                {activeTab === 'calendar' && <PlanScreen />}
                {activeTab === 'settings' && <MenuScreen />}
            </View>

        {/* タブバー */}
        <View style={styles.tabBar}>
            <TouchableOpacity
            onPress={() => setActiveTab('stock')}
            style={styles.tabButton}
            activeOpacity={0.7}
            >
            <View
                style={[
                styles.tabIconContainer,
                activeTab === 'stock' && styles.tabIconContainerActive,
                ]}
            >
                <Ionicons
                name="grid"
                size={22}
                color={activeTab === 'stock' ? '#6B8E6B' : '#d1d5db'}
                />
            </View>
            <Text
                style={[
                styles.tabLabel,
                activeTab === 'stock' && styles.tabLabelActive,
                ]}
            >
                Stock
            </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => setActiveTab('recipe')}
            style={styles.tabButton}
            activeOpacity={0.7}
            >
            <View
                style={[
                styles.tabIconContainer,
                activeTab === 'recipe' && styles.tabIconContainerActive,
                ]}
            >
                <Ionicons
                name="star"
                size={22}
                color={activeTab === 'recipe' ? '#6B8E6B' : '#d1d5db'}
                />
            </View>
            <Text
                style={[
                styles.tabLabel,
                activeTab === 'recipe' && styles.tabLabelActive,
                ]}
            >
                Recipe
            </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => setActiveTab('calendar')}
            style={styles.tabButton}
            activeOpacity={0.7}
            >
            <View
                style={[
                styles.tabIconContainer,
                activeTab === 'calendar' && styles.tabIconContainerActive,
                ]}
            >
                <Ionicons
                name="calendar"
                size={22}
                color={activeTab === 'calendar' ? '#6B8E6B' : '#d1d5db'}
                />
            </View>
            <Text
                style={[
                styles.tabLabel,
                activeTab === 'calendar' && styles.tabLabelActive,
                ]}
            >
                Plan
            </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => setActiveTab('settings')}
            style={styles.tabButton}
            activeOpacity={0.7}
            >
            <View
                style={[
                styles.tabIconContainer,
                activeTab === 'settings' && styles.tabIconContainerActive,
                ]}
            >
                <Ionicons
                name="settings"
                size={22}
                color={activeTab === 'settings' ? '#6B8E6B' : '#d1d5db'}
                />
            </View>
            <Text
                style={[
                styles.tabLabel,
                activeTab === 'settings' && styles.tabLabelActive,
                ]}
            >
                Menu
            </Text>
            </TouchableOpacity>
        </View>

        {/* ホームインジケーター（iOS用） */}
        {Platform.OS === 'ios' && (
            <View style={styles.homeIndicator} />
        )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAECE9',
        paddingTop: 8
    },
    statusBar: {
        height: 44,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 32,
        paddingTop: Platform.OS === 'ios' ? 0 : 8,
    },
    statusBarTime: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000',
    },
    statusBarIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    statusBarSignal: {
        width: 14,
        height: 14,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: '#000',
    },
    statusBarBattery: {
        width: 16,
        height: 10,
        backgroundColor: '#000',
        borderRadius: 2,
    },
    headerBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 192,
        backgroundColor: '#6B8E6B',
        opacity: 0.1,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        zIndex: 0,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 8,
        zIndex: 10,
    },
    headerButton: {
        width: 40,
        height: 40,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    headerTitle: {
        width: '100%',
        fontSize: 24,
        fontFamily: 'serif',
        color: '#3A4D3A',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 16,
    },
    mainContent: {
        flex: 1,
        zIndex: 10,
    },
    tabBar: {
        height: 96,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderTopWidth: 1,
        borderTopColor: '#f9fafb',
        paddingHorizontal: 32,
        paddingBottom: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 20,
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        gap: 6,
    },
    tabIconContainer: {
        padding: 8,
        borderRadius: 12,
    },
    tabIconContainerActive: {
        backgroundColor: '#f0fdf4',
    },
    tabLabel: {
        fontSize: 9,
        fontWeight: '900',
        textTransform: 'uppercase',
        color: '#d1d5db',
    },
    tabLabelActive: {
        color: '#6B8E6B',
    },
    homeIndicator: {
        position: 'absolute',
        bottom: 8,
        left: '50%',
        marginLeft: -50,
        width: 100,
        height: 6,
        backgroundColor: '#e5e7eb',
        borderRadius: 3,
    },
});
