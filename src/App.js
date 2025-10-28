import { SignUp } from "./components/auth/SignUp";
import { Header } from "./components/Header";
import Login from './components/auth/Login';
import { Routes, Route } from 'react-router-dom';
import DummyDashboard from './components/dashboards/dummyDashboard';
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dummy-dashboard" element={<ProtectedRoute><DummyDashboard /></ProtectedRoute>} />
      </Routes>
    </>
  );
}

export default App;
