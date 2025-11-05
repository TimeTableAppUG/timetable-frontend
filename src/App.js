import { SignUp } from "./components/auth/SignUp";
import { Header } from "./components/Header";
import Login from "./components/auth/Login";
import { Routes, Route } from "react-router-dom";
import DummyDashboard from "./components/dashboards/dummyDashboard";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { Notifications } from "./components/dashboards/navBarPages/notifications";
import { UploadTimeTable } from "./components/dashboards/navBarPages/uploadTimetable";
import { Dashboard } from "./components/dashboards/navBarPages/dashboard";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/Dashboard"
          element={
            // <ProtectedRoute>
            <DummyDashboard />
            // </ProtectedRoute>
          }
        >
          <Route path="Notifications" element={<Notifications />} />
          <Route path="Upload Timetable" element={<UploadTimeTable />} />
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
