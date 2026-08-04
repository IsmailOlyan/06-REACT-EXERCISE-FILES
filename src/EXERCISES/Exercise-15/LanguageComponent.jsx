import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";

const LanguageComponent = () => {
    const language = useContext(LanguageContext);

    const messages = {
        English: 'Hello!',
        Spanish: '¡Hola!',
    };

    return (
        <div>
            <p>{messages[language]}</p>
        </div>
    );
};

export default LanguageComponent;