import { Routes, Route, Navigate } from "react-router-dom";
import { RoutesArray } from "./RoutesArray";
import { useEffect, useState } from "react";

export default function AppRouter() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check if the user is authenticated (e.g., check local storage or an auth context)
        const auth = localStorage.getItem("isAuthenticated");
        setIsAuthenticated(auth === "true");
    }, []);

    return (
        <Routes>
            {RoutesArray.map((route) => (
                <Route path={route.path} key={route.path} element={route.requireLogin && !isAuthenticated ? <Navigate to="/login" replace /> : route.element} />
            ))}
        </Routes>
    );
}
