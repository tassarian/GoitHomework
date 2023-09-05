import { useState } from "react";

export const useSaveUserData = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        name: "",
    });
    const saveUserData = (data) => setUserData(data);

    return { userData, saveUserData };
};
