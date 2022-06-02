import { Routes, Route, Navigate } from "react-router-dom";
import "./css/App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import Group from "./components/Group";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />}/>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/group" element={<Group />}></Route>
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
