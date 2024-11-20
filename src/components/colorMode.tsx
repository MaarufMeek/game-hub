import React, {useEffect} from "react";
import {Form} from "react-bootstrap";

interface Props {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ColorMode: React.FC<Props> = ({isDarkMode, toggleTheme}) => {
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
