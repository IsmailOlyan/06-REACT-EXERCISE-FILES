import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemedComponent = () => {
    const theme = useContext(ThemeContext);

    const style = {
        backgroundColor: theme === "light" ? "#ffffff" : "#333333",
        color: theme === "light" ? "#000000" : "#ffffff",
        padding: "20px",
        textAlign: "center",
    };

    return (
        <div style={style}>
            This is a {theme}-themed Component!
        </div>
    );
};

export default ThemedComponent;