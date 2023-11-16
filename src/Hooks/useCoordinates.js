import { useState, useEffect } from "react";

const useCoordinates = () => {
    const [location, setLocation] = useState({ latitude: 55.676098, longitude: 12.568337 });

    useEffect(() => {
        const getLocation = async () => {
            try {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });

                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
            } catch (error) {
                console.error("Error getting location:", error);
            }
        };

        getLocation();
    }, []); // Run effect only once when the component mounts

    return location;
};

export default useCoordinates;
