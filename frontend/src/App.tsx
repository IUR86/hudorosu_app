import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { AdminTopPage } from './pages/admin/AdminTop';
import { CategoryIndexPage } from './pages/admin/category/CategoryIndex';
import { FoodIndexPage } from './pages/admin/food/FoodIndex';
import { NotFoundPage } from './pages/admin/error/NotFound';
import { AuthLoginPage } from './pages/admin/auth/AuthLogin';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* 管理画面ページ */}
                <Route path="/admin" element={<AdminTopPage />} />
                <Route path="/admin/login" element={<AuthLoginPage />} />
                <Route path="/admin/food" element={<FoodIndexPage />} />
                <Route path="/admin/category" element={<CategoryIndexPage />} />
                {/* 404ページ */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
