import React, {useEffect} from "react";
import {Form} from "react-bootstrap";
import {useTheme} from "./ThemeContext";

interface Props {

}

const ColorMode = () => {
    const {isDarkMode, toggleTheme} = useTheme();
    useEffect(() => {
        const theme = isDarkMode ? "dark" : "light";
        document.documentElement.setAttribute("data-bs-theme", theme);
    }, [isDarkMode]);

    return (
        <Form>
            <Form.Check
                type="switch"
                id="darkModeSwitch"
                checked={isDarkMode}
                onChange={toggleTheme}
                className="large-switch"
            />
        </Form>
    );
};

export default ColorMode;
