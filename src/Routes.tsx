import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<h1>Not Found 404</h1>} />
        </Routes>
    );
}

export default MainRoutes;