import apiClient from '@/utils/axiosConfig';
import { User, UserResponse } from '@/types/user';

/**
 * 現在のユーザー情報を取得する
 * @returns ユーザー情報
 */
export const getCurrentUser = async (): Promise<User> => {
    const response = await apiClient.get<UserResponse>('/admin/settings/me');
    return response.data;
};

/**
 * ユーザー情報を更新する
 * @param data 更新するユーザー情報
 * @returns 更新されたユーザー情報
 */
export const updateUser = async (data: { name?: string; email?: string }): Promise<User> => {
    const response = await apiClient.put<UserResponse>('/admin/settings/me', data);
    return response.data;
};

/**
 * パスワードを変更する
 * @param currentPassword 現在のパスワード
 * @param newPassword 新しいパスワード
 */
export const changePassword = async (currentPassword: string, newPassword: string): Promise<void> => {
    await apiClient.put('/admin/settings/password', {
        currentPassword,
        newPassword,
    });
};

export interface SystemSetting {
    value: string;
    description: string | null;
    id: number;
    created_at: string;
    updated_at: string;
}

export interface SystemSettings {
    [key: string]: SystemSetting;
}

/**
 * システム設定を取得する
 * @returns システム設定
 */
export const getSystemSettings = async (): Promise<SystemSettings> => {
    const response = await apiClient.get<SystemSettings>('/admin/settings/system');
    return response.data;
};

/**
 * システム設定を更新する
 * @param settings 更新する設定（key-value形式）
 * @returns 更新されたシステム設定
 */
export const updateSystemSettings = async (settings: Record<string, string>): Promise<SystemSettings> => {
    const response = await apiClient.put<{ message: string; settings: SystemSettings }>('/admin/settings/system', {
        settings
    });
    return response.data.settings;
};

/**
 * アプリ名を取得する
 * @returns アプリ名
 */
export const getAppName = async (): Promise<string> => {
    try {
        const response = await apiClient.get<{ app_name: string }>('/admin/settings/app-name');
        return response.data.app_name;
    } catch (error) {
        console.error('Get app name error:', error);
        return 'FoodDB';
    }
};
