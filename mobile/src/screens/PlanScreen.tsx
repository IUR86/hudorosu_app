import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PlanScreen() {
    const [selectedDay, setSelectedDay] = useState('13');

    const days = [
        { d: '12', w: 'Mon' },
        { d: '13', w: 'Tue' },
        { d: '14', w: 'Wed' },
        { d: '15', w: 'Thu' },
        { d: '16', w: 'Fri' },
        { d: '17', w: 'Sat' },
        { d: '18', w: 'Sun' },
    ];

    const meals = [
        {
            time: 'Morning',
            menu: 'グラノーラとフルーツ',
            status: 'done',
            emoji: '🥣'
        },
        {
            time: 'Lunch',
            menu: '鶏肉と野菜のパスタ',
            status: 'next',
            emoji: '🍝'
        },
        {
            time: 'Dinner',
            menu: '鮭のムニエルと温野菜',
            status: 'pending',
            emoji: '🐟'
        },
    ];

    return (
        <View style={styles.container}>
            {/* Top Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>
                    献立カレンダー
                </Text>
                <TouchableOpacity style={styles.searchButton} activeOpacity={0.7}>
                    <Ionicons name="search" size={20} color="#6b7280" />
                </TouchableOpacity>
            </View>

            {/* Scrollable Area */}
            <ScrollView 
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Date Selector - Horizontal Scroll */}
                <View style={styles.dateSelectorContainer}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.dateSelector}
                        snapToInterval={76}
                        decelerationRate="fast"
                        snapToAlignment="start"
                    >
                        {days.map((day, i) => {
                            const isActive = selectedDay === day.d;
                            return (
                                <TouchableOpacity
                                    key={i}
                                    onPress={() => setSelectedDay(day.d)}
                                    style={[
                                        styles.dateButton,
                                        isActive && styles.dateButtonActive
                                    ]}
                                    activeOpacity={0.7}
                                >
                                    <Text style={[
                                        styles.dateWeekday,
                                        isActive && styles.dateWeekdayActive
                                    ]}>
                                        {day.w}
                                    </Text>
                                    <Text style={[
                                        styles.dateDay,
                                        isActive && styles.dateDayActive
                                    ]}>
                                        {day.d}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                </View>

                {/* Meal Cards */}
                <View style={styles.mealsContainer}>
                    <View style={styles.mealsHeader}>
                        <Text style={styles.mealsHeaderTitle}>Today's Meals</Text>
                        <Text style={styles.mealsHeaderCount}>3 items</Text>
                    </View>

                    {meals.map((meal, i) => (
                        <TouchableOpacity
                            key={i}
                            style={styles.mealCard}
                            activeOpacity={0.97}
                        >
                            <View style={[
                                styles.mealStatusBar,
                                meal.status === 'done' && styles.mealStatusBarDone,
                                meal.status === 'next' && styles.mealStatusBarNext,
                                meal.status === 'pending' && styles.mealStatusBarPending,
                            ]} />

                            <View style={styles.mealEmojiContainer}>
                                <Text style={styles.mealEmoji}>{meal.emoji}</Text>
                            </View>

                            <View style={styles.mealContent}>
                                <View style={styles.mealTimeRow}>
                                    <Text style={styles.mealTime}>{meal.time}</Text>
                                    {meal.status === 'next' && (
                                        <View style={styles.mealNextBadge}>
                                            <Text style={styles.mealNextBadgeText}>NEXT</Text>
                                        </View>
                                    )}
                                </View>
                                <Text style={styles.mealMenu}>{meal.menu}</Text>
                            </View>

                            <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            {/* Floating Action Button */}
            <TouchableOpacity style={styles.fab} activeOpacity={0.9}>
                <Ionicons name="add" size={32} color="#ffffff" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FAF8',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: Platform.OS === 'ios' ? 16 : 8,
        paddingBottom: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: 'serif',
        fontWeight: 'bold',
        color: '#3A4D3A',
    },
    searchButton: {
        width: 40,
        height: 40,
        backgroundColor: '#f3f4f6',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 120,
    },
    dateSelectorContainer: {
        paddingVertical: 24,
    },
    dateSelector: {
        paddingHorizontal: 24,
        gap: 12,
    },
    dateButton: {
        width: 60,
        paddingVertical: 16,
        borderRadius: 16,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#f3f4f6',
        alignItems: 'center',
        marginRight: 12,
    },
    dateButtonActive: {
        backgroundColor: '#6B8E6B',
        borderColor: '#6B8E6B',
        shadowColor: '#6B8E6B',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        transform: [{ scale: 1.05 }],
    },
    dateWeekday: {
        fontSize: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#9ca3af',
        marginBottom: 4,
    },
    dateWeekdayActive: {
        color: '#f0fdf4',
    },
    dateDay: {
        fontSize: 18,
        fontFamily: 'serif',
        fontWeight: 'bold',
        color: '#4b5563',
    },
    dateDayActive: {
        color: '#ffffff',
    },
    mealsContainer: {
        paddingHorizontal: 24,
        gap: 16,
    },
    mealsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 8,
    },
    mealsHeaderTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1.2,
        color: '#9ca3af',
    },
    mealsHeaderCount: {
        fontSize: 12,
        color: '#6B8E6B',
        fontWeight: '500',
    },
    mealCard: {
        backgroundColor: '#ffffff',
        borderRadius: 24,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        borderWidth: 1,
        borderColor: '#f3f4f6',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
        marginBottom: 16,
        overflow: 'hidden',
    },
    mealStatusBar: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: 6,
    },
    mealStatusBarDone: {
        backgroundColor: '#e5e7eb',
    },
    mealStatusBarNext: {
        backgroundColor: '#6B8E6B',
    },
    mealStatusBarPending: {
        backgroundColor: '#fed7aa',
    },
    mealEmojiContainer: {
        width: 56,
        height: 56,
        backgroundColor: '#f9fafb',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mealEmoji: {
        fontSize: 28,
    },
    mealContent: {
        flex: 1,
    },
    mealTimeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 4,
    },
    mealTime: {
        fontSize: 10,
        fontWeight: '900',
        textTransform: 'uppercase',
        letterSpacing: 1,
        color: '#6B8E6B',
    },
    mealNextBadge: {
        backgroundColor: '#6B8E6B',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 8,
    },
    mealNextBadgeText: {
        fontSize: 8,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    mealMenu: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1f2937',
    },
    fab: {
        position: 'absolute',
        bottom: 46,
        right: 24,
        width: 56,
        height: 56,
        backgroundColor: '#3A4D3A',
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#3A4D3A',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
});