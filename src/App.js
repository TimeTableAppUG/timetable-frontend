import { SignUp } from "./components/auth/SignUp";
import { Header } from "./components/Header";
import Login from './components/auth/Login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
