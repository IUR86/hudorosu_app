// バックエンドAPIのレスポンス型
export interface CategoryResponse {
    id: number;
    name: string;
    description: string | null;
    foodCount?: number;
}

// フロントエンドで使用する型（色情報を含む）
export interface Category {
    id: number;
    name: string;
    description: string | null;
    color: string;
    foodCount?: number;
}

export type Categories = Category[];