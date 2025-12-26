import React from 'react';
import { AdminAside } from '@/components/admin/layout/AdminAside';
import { AdminHeader } from '@/components/admin/layout/AdminHeader';

export const FoodIndexPage: React.FC = () => {
    return (
        <div className="flex h-screen">
            <AdminAside />
            <main className="flex-1 flex flex-col overflow-hidden">
                <AdminHeader />
                <div id="view-items" className="p-8 space-y-6 overflow-y-auto flex-1 custom-scrollbar">
                    <div className="flex items-center justify-between">
                        <div>
                            <nav className="flex items-center text-sm text-slate-500 gap-2 mb-2 font-medium tracking-wide">
                                <span className="hover:text-sky-600 cursor-pointer" onClick={() => { }}>HOME</span>
                                <i className="fas fa-chevron-right text-[10px] text-slate-300"></i>
                                <span className="text-slate-900 font-bold">食材マスタ管理</span>
                            </nav>
                            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">食材マスタ一覧</h2>
                        </div>
                        <div className="flex gap-3">
                            <button onClick={() => { }}
                                className="flex items-center gap-2 px-6 py-2.5 text-sm bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition-all shadow-lg shadow-sky-100 font-bold">
                                <i className="fas fa-plus text-xs"></i> 新規食材を登録
                            </button>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-white/50">
                            <div className="flex gap-4">
                                <div
                                    className="flex gap-2 items-center bg-slate-100 px-4 py-2 rounded-xl border border-slate-200">
                                    <i className="fas fa-filter text-slate-400 text-xs"></i>
                                    <select id="category-filter" onChange={(e) => { }}
                                        className="bg-transparent text-sm text-slate-700 outline-none cursor-pointer font-bold">
                                        <option value="all">全カテゴリ</option>
                                        <option value="精肉">精肉</option>
                                        <option value="野菜">野菜</option>
                                        <option value="乳製品">乳製品</option>
                                        <option value="粉物">粉物</option>
                                        <option value="調味料">調味料</option>
                                    </select>
                                </div>
                            </div>
                            <span id="items-count"
                                className="text-xs font-bold text-slate-400 uppercase tracking-widest"></span>
                        </div>
                        <table className="w-full text-left border-collapse text-sm">
                            <thead className="bg-slate-50/50 text-slate-500 font-bold uppercase tracking-widest text-[11px]">
                                <tr>
                                    <th className="px-6 py-4 border-b border-slate-100">食材名</th>
                                    <th className="px-6 py-4 border-b border-slate-100">カテゴリ</th>
                                    <th className="px-6 py-4 border-b border-slate-100">特定アレルギー</th>
                                    <th className="px-6 py-4 border-b border-slate-100">最終更新日</th>
                                    <th className="px-6 py-4 border-b border-slate-100 text-center">操作</th>
                                </tr>
                            </thead>
                            <tbody id="master-table-body"></tbody>
                        </table>
                    </div>
                </div>
                <div id="view-categories" className="p-8 space-y-6 overflow-y-auto flex-1 custom-scrollbar hidden">
                    <div className="flex items-center justify-between">
                        <div>
                            <nav className="flex items-center text-sm text-slate-500 gap-2 mb-2 font-medium tracking-wide">
                                <span className="hover:text-sky-600 cursor-pointer">HOME</span>
                                <i className="fas fa-chevron-right text-[10px] text-slate-300"></i>
                                <span className="text-slate-900 font-bold">カテゴリ管理</span>
                            </nav>
                            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">カテゴリ一覧</h2>
                        </div>
                        <div className="flex gap-3">
                            <button onClick={() => { }}
                                className="flex items-center gap-2 px-6 py-2.5 text-sm bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition-all shadow-lg shadow-sky-100 font-bold">
                                <i className="fas fa-plus text-xs"></i> 新規カテゴリを追加
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="category-grid"></div>
                </div>
            </main>
        </div>
    )
}