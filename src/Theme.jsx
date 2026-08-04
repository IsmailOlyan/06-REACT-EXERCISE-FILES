import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import ThemedComponent from './ThemedComponent'; // 👈 Halkan lagu saxay (ka bixi { })

const Theme = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={theme}>
            <button onClick={toggleTheme}>
                Toggle Theme (Current: {theme})
            </button>
            <ThemedComponent />
        </ThemeContext.Provider>
    );
};

export default Theme;