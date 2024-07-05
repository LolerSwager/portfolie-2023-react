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
                const code = params.get("code");

                if (code) {
                    const response = await fetch(`http://localhost:3000/callback?code=${code}`);
                    if (response.ok) {
                        const userData = await response.json();
                        setUser(userData);
                        localStorage.setItem("isAuthenticated", "true");
                        // Redirect to home or desired page after login
                        navigate("/");
                    } else {
                        throw new Error("Failed to fetch user data");
                    }
                } else {
                    throw new Error("No authorization code found");
                }
            } catch (error) {
                console.error("Error fetching user data:", error.message);
                navigate("/login"); // Redirect to login page on error
            }
        };

        fetchUserData();
    }, [location, navigate]);

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
