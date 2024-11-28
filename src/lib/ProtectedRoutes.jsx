import { Outlet, Navigate } from "react-router-dom";
import { useUserStore } from '../stores/useUserStore'
const ProtectedRoutes = () => {
    const { user, loading } = useUserStore();

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (!user) {
        return <Navigate to="/signin" />;
    }

    if(user && user.role !== "ADMIN") {
        return <Navigate to={"/"} />;
    }

    return <Outlet />

}

export default ProtectedRoutes;