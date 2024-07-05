import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SuccessPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const params = new URLSearchParams(location.search);
                const userData = params.get("user");
                if (userData) {
                    setUser(JSON.parse(decodeURIComponent(userData)));
                    localStorage.setItem("isAuthenticated", "true");
                    // No need to navigate to home page, stay on SuccessPage
                } else {
                    throw new Error("No user data found");
                }
            } catch (error) {
                console.error("Error fetching user data:", error.message);
                navigate("/login"); // Redirect to login page on error
            }
        };

        fetchUserData();
    }, [location, navigate]);

    // Redirect to login if no user data is found
    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    return (
        <div>
            {user ? (
                <div>
                    <h1>
                        Welcome, {user.username}#{user.discriminator}
                    </h1>
                    <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`} alt="avatar" />
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
};

export default SuccessPage;
