import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Main from "../Components/Main";

const SuccessPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const userData = params.get("user");
        if (userData) {
            setUser(JSON.parse(decodeURIComponent(userData)));
            sessionStorage.setItem("isAuthenticated", true);
        } else {
            navigate("/login"); // Redirect to login if no user data is found
        }
    }, [location, navigate]);

    const handleLogout = () => {
        sessionStorage.removeItem("isAuthenticated");
        navigate("/login");
    };

    return (
        <Main PageHeader="Success Page" PageTitle="Success">
            <div>
                {user ? (
                    <div>
                        <h2>
                            Welcome, {user.username}#{user.discriminator}
                        </h2>
                        <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`} alt="avatar" />
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <p>Loading user data...</p>
                )}
            </div>
        </Main>
    );
};

export default SuccessPage;
