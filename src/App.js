import React from "react";
import User from "./Pages/User";
import { BrowserRouter as Router, Route, Routes, Link  } from 'react-router-dom';
import Login from "./Pages/LoginAdmin";
import Private from "./Components/PrivateRoute";
import Dashboard from "./Pages/DashboardAdmin";
import FormAddNews from "./Components/FormAdminAddNews";
import PrivateAddNews from "./Components/PrivateAddNews";
import AddImportantMen from "./Pages/AddImortantMen";
import Test from "./Components/Test";
function App() {
  // const isAuthenticated = !!localStorage.getItem('token');
  // const navigate = useNavigate()
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<User />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/test" element={<Test />} />
          <Route path="/dashboard" element={<Private />} />
          <Route path="/dashboard/addnews" element={<PrivateAddNews />} />
          <Route path="/dashboard/men" element={<AddImportantMen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
