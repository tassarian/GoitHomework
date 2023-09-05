import { useState } from "react";

export const useSavePhoto = () => {
    const [photo, setPhoto] = useState(null);
    const savePhoto = (data) => setPhoto(data);
    console.log(photo);
    return { savePhoto, photo };
};
