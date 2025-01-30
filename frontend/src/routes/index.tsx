import { Routes, Route, Outlet } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import {
  NotFoundPage,
  Login,
  Dashboard,
  LogOut,
  Profile,
  Registration,
} from "../pages";
import BaseLayout from "../layouts/BaseLayout";

const Index = () => (
  <Routes>
    <Route element={<BaseLayout />}>
      <Route path={"/"} element={<h2>Home Page</h2>} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route
        element={
          <ProtectedRoute>
            <Outlet />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<h2>Home page</h2>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<LogOut />} />
      </Route>
    </Route>

    <Route path={"*"} element={<NotFoundPage />} />
  </Routes>
);

export default Index;
