import React, { useState } from "react";
import LanguageContext from "./LanguageContext";
import LanguageComponent from "./LanguageComponent";

const Language = () => {
    const [language, setLanguage] = useState('English');

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'English' ? 'Spanish' : 'English'));
    };

    return (
        <LanguageContext.Provider value={language}>
            <button onClick={toggleLanguage}>
                Switch to : <strong>{language === 'English' ? 'Spanish' : 'English'}</strong> Language
            </button>
            <br />
            {/* Render child component so it can consume the context */}
            <LanguageComponent />
        </LanguageContext.Provider>
    );
};

export default Language;