import { Routes, Route, Navigate } from "react-router-dom";
import { RoutesArray } from "./RoutesArray";
import { useEffect, useState } from "react";

export default function AppRouter() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const auth = sessionStorage.getItem("isAuthenticated");
        setIsAuthenticated(auth === "true");
    }, []);

    return (
        <Routes>
            {RoutesArray.map((route) => (
                <Route key={route.path} path={route.path} element={route.requireLogin && !isAuthenticated ? <Navigate to={isAuthenticated ? "/profile" : "/login"} replace /> : route.element} />
            ))}
        </Routes>
    );
}
