import { useState } from "react";

export const useHide = () => {
    const [isHidden, setIsHidden] = useState(false);
    const hide = () => setIsHidden(true);
    const show = () => setIsHidden(!isHidden);
    console.log(isHidden);
    return { isHidden, hide, show };
};
