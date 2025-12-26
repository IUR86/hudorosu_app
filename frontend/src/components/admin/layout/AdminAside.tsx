import { useNavigate } from 'react-router-dom';
import { AdminNav } from "./AdminNav"

export const AdminAside: React.FC = () => {
    const navigate = useNavigate();

    return (
        <aside className="w-64 bg-slate-900 text-white flex flex-col shrink-0">
            <div className="p-6">
                <h1 
                    onClick={() => navigate('/admin')}
                    className="text-2xl font-bold tracking-wider flex items-center gap-2 text-sky-400 cursor-pointer hover:text-sky-300 transition-colors"
                >
                    <i className="fas fa-box-open"></i> FoodDB
                </h1>
            </div>
            <AdminNav />
            <div className="p-4 border-t border-slate-800">
                <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors w-full text-left text-sm">
                    <i className="fas fa-sign-out-alt w-5"></i>
                    ログアウト
                </button>
            </div>
        </aside>
    )
}
