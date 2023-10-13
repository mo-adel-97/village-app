import { Link, Navigate, useNavigate } from 'react-router-dom';
import Dashboard from '../Pages/DashboardAdmin';
const Private = (Component) => {
    const navigate=useNavigate();
    const isAuthenticated = !!localStorage.getItem('token');

    return (
        isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
         )
}
export default Private;