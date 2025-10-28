import { SignUp } from "./components/auth/SignUp";
import { Header } from "./components/Header";
import Login from './components/auth/Login';
import { Routes, Route } from 'react-router-dom';
import AuthProvider from './contexts/authContext/authProvider';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
