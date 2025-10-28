import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext/authContext';

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(AuthContext);
  if (isLoggedIn()) {
    console.log("User is logged in. Rendering protected route.");
    return children;
  }
  console.log("User is not logged in. Redirecting to login.");
  return <Navigate to="/login" />;
}

export default ProtectedRoute;