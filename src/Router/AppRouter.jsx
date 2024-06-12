import { Routes, Route, Navigate } from "react-router-dom";
import { RoutesArray } from "./RoutesArray";

export default function AppRouter() {
    return (
        <Routes>
            {RoutesArray.map((route) => (
                <Route path={route.path} key={route.path} element={route.element} />
            ))}
        </Routes>
    );
}
