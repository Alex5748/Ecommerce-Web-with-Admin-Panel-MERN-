import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, isLoading, children }) {
  const location = useLocation();

  // Handle loading state (e.g., when user data is being fetched)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Log debug info
  console.log(location.pathname, isAuthenticated, user?.role);

  // Handle root path ("/")
  if (location.pathname === "/") {
    if (!isAuthenticated) {
      return <Navigate to="/auth/login" />;
    }
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    }
    return <Navigate to="/shop/home" />;
  }

  // Protect routes for unauthenticated users
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

  // Prevent logged-in users from accessing login/register pages
  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    }
    return <Navigate to="/shop/home" />;
  }

  // Prevent non-admin users from accessing admin pages
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  // Prevent admin users from accessing shop pages
  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("shop")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  // Render children for allowed routes
  return <>{children}</>;
}

export default CheckAuth;
