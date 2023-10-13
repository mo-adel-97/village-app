import { Link, Navigate, useNavigate } from 'react-router-dom';
import Dashboard from '../Pages/DashboardAdmin';
import FormAddNews from './FormAdminAddNews';
const PrivateAddNews = (Component) => {
    const navigate=useNavigate();
    const isAuthenticated = !!localStorage.getItem('token');

    return (
        isAuthenticated ? <FormAddNews /> : <Navigate to="/login" />
         )
}
export default PrivateAddNews;