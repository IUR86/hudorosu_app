export const AuthLoginPage: React.FC = () => {
    return (
        <div id="login-screen" className="fixed inset-0 z-[100] bg-gradient-to-br from-sky-50 via-white to-indigo-50 flex items-center justify-center p-8 overflow-y-auto">
            <div className="w-full max-w-md glass-card rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden fade-in">
                <div className="p-10 text-center">
                    <div className="w-20 h-20 bg-sky-500 rounded-3xl flex items-center justify-center text-white text-4xl mx-auto mb-6 shadow-xl shadow-sky-200">
                        <i className="fas fa-box-open"></i>
                    </div>
                    <h1 className="text-3xl font-black text-slate-800 tracking-tight">FoodDB</h1>
                    <p className="text-slate-400 text-sm mt-2 font-medium">食材マスタ管理システムへログイン</p>
                </div>
                <div className="px-10 pb-12 space-y-6">
                    <form id="login-form" className="space-y-6">
                        <div className="space-y-5">
                            <div>
                                <label className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 px-1">メールアドレス</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-4 text-slate-400"><i className="fas fa-envelope"></i></span>
                                    <input type="email" id="login-email" required placeholder="admin@example.com" value="admin@example.com" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-sky-400 focus:bg-white transition-all font-medium text-slate-700" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 px-1">パスワード</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-4 text-slate-400"><i className="fas fa-lock"></i></span>
                                    <input type="password" id="login-password" required placeholder="••••••••" value="password123" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-sky-400 focus:bg-white transition-all font-medium text-slate-700" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" id="login-btn"
                            className="w-full py-4 bg-sky-500 text-white rounded-2xl font-bold hover:bg-sky-600 active:scale-[0.98] transition-all shadow-lg shadow-sky-100 flex items-center justify-center gap-2 text-lg">
                            ログイン
                        </button>
                    </form>

                    <div className="flex items-center gap-4 py-2">
                        <div className="flex-1 h-px bg-slate-100"></div>
                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">または外部アカウントで</span>
                        <div className="flex-1 h-px bg-slate-100"></div>
                    </div>

                    <button type="button" onClick={() => handleSocialLogin('Google')} className="w-full py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50 active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-sm">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Googleでログイン
                    </button>
                </div>
            </div>
        </div>
    )
}