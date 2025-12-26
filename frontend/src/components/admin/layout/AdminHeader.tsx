export const AdminHeader: React.FC = () => {
    return (
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-end px-8 shrink-0">
            <div className="flex items-center gap-4 text-slate-500">
                <div className="flex items-center gap-2 border-l pl-4 ml-2 text-slate-700">
                    <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 font-bold">U</div>
                    <span className="text-sm font-medium">山田 太郎</span>
                </div>
            </div>
        </header>
    )
}