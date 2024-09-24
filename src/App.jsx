import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./view/components/Login";
import Home from "./view/screens/Home";
import Register from "./view/components/Register";
import NavBar from "./view/components/NavBar";
import ToDo from "./view/screens/ToDo";
import DealForm from "./view/components/DealForm";
import ResetPass from "./view/components/ResetPass";
import Protected from "./view/protected/Protected";
import Profile from "./view/screens/Profile";
import ContactUs from "./view/screens/ContactUs";

import { Context } from "./context/Context";
import AboutUs from "./view/screens/AboutUs";
import Sidebar from "./view/components/SideBar";
import Company from "./view/screens/Company";

// Example authentication check (replace with your actual logic)
const isAuthenticated = localStorage.getItem("user");

function App() {
  return (
    <Context>
      <BrowserRouter>
        {
          !isAuthenticated ? <NavBar /> : <Sidebar/>
        }
        <Routes>
          {/* Home page is public */}
          <Route path="/" element={<Home />} />

          {/* Public routes */}
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/company" element={<Company />} />

          {/* Protected routes (require authentication) */}
          <Route
            path="/todo"
            element={isAuthenticated ? <Protected Component={ToDo} /> : <Navigate to="/login" />}
          />
          <Route
            path="/dealform"
            element={isAuthenticated ? <Protected Component={DealForm} /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={isAuthenticated ? <Protected Component={Profile} /> : <Navigate to="/login" />}
          />
          <Route
            path="/resetpassword"
            element={isAuthenticated ? <Protected Component={ResetPass} /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;