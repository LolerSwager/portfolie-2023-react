// SuccessPage.js (Frontend)

import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Main from "../Components/Main";
import axios from "axios";
import Button from "../Components/buttons/Button";

const SuccessPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get("token");

        if (token) {
            // Send token to backend to verify and fetch user data
            axios
                .get(`https://api.jannick.ninja/authenticated?token=${token}`)
                .then((response) => {
                    setUser(response.data);
                    sessionStorage.setItem("isAuthenticated", true);
                })
                .catch((error) => {
                    console.error("Error fetching user data:", error);

                    navigate("/login");
                });
        } else {
            navigate("/login"); // Redirect to login if no token is found
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
                        <Link to="/server">go to server page</Link>
                        <Button ButtonName="Logout" isClicked={handleLogout} color="red" />
                    </div>
                ) : (
                    <p>Loading user data...</p>
                )}
            </div>
        </Main>
    );
};

export default SuccessPage;
