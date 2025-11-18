import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// 🧑‍💻 User Pages
import Homepage from "../Pages/UserPages/Homepage";
import Orders from "../Pages/UserPages/Orders";
import UserProfile from "../Pages/UserPages/UserProfile";
import UserContactPage from "../Pages/UserPages/UserContactPage";
import RestorantPage from "../Pages/UserPages/RestorantPage";

// 🏢 Admin Pages
import AdminDashboard from "../Pages/AdminPages/AdminDashboard";
import AddOrRemoveResturant from "../Pages/AdminPages/AddOrRemoveResturant";
import AdminNotifications from "../Pages/AdminPages/AdminNotifications";
import Reports from "../Pages/AdminPages/Reports";

// 🍽️ Restaurant Pages
import RestorantDashboard from "../Pages/RestorantPages/RestorantDashboard";
import AddOrRemoveProduct from "../Pages/RestorantPages/AddOrRemoveProduct";
import RestorantNotifications from "../Pages/RestorantPages/RestorantNotifications";
import RestorantContactAdmin from "../Pages/RestorantPages/RestorantContactAdmin";

// 🔐 Auth Pages
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";

// 🧠 Fake Auth Example (Replace with real auth logic)
// const userRole = localStorage.getItem("role"); // "user", "admin", "restaurant", or null
// const isLoggedIn = !!userRole; // true if logged in

const userRole = "user";
const isLoggedIn = true;

const AppRoutes = () => {
  return (
    <Routes>

      {/* ✅ Public Routes */}
      <Route path="/" element={<Homepage />} />  {/* مفتوحة للجميع */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* 🧑 User Protected Routes */}
      <Route element={<ProtectedRoute isAllowed={isLoggedIn && userRole === "user"} />}>
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/contact" element={<UserContactPage />} />
        <Route path="/restaurant/:id" element={<RestorantPage />} />
      </Route>

      {/* 🏢 Admin Protected Routes */}
      <Route element={<ProtectedRoute isAllowed={isLoggedIn && userRole === "admin"} />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/restaurants" element={<AddOrRemoveResturant />} />
        <Route path="/admin/notifications" element={<AdminNotifications />} />
        <Route path="/admin/reports" element={<Reports />} />
      </Route>

      {/* 🍽️ Restaurant Protected Routes */}
      <Route element={<ProtectedRoute isAllowed={isLoggedIn && userRole === "restaurant"} />}>
        <Route path="/restaurant/dashboard" element={<RestorantDashboard />} />
        <Route path="/restaurant/menu" element={<AddOrRemoveProduct />} />
        <Route path="/restaurant/notifications" element={<RestorantNotifications />} />
        <Route path="/restaurant/contact-admin" element={<RestorantContactAdmin />} />
      </Route>

    </Routes>
  );
};

export default AppRoutes;
