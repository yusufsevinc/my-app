import React, { useEffect, useState } from "react";
import axios from "axios";

const UserProfile = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    useEffect(() => {
        axios.get("/api/user")
            .then((response) => {
                const userData = response.data;
                setName(userData.name);
                setSurname(userData.surname);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }, []);

    return (
        <div>
            <h1>naber</h1>
            <h2>{name} {surname}</h2>
        </div>
    );
};

export default UserProfile;