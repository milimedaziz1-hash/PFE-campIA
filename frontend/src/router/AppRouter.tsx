import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Landing from "../pages/landing";
import Login from "../pages/login";
import Register from "../pages/register";
import Dashboard from "../pages/dashbord";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout global */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
