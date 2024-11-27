import React, {useRef} from "react";
import {Form, InputGroup} from "react-bootstrap";
import {FaSearch} from "react-icons/fa";
import {useTheme} from "./ThemeContext";

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({onSearch}: Props) => {
    const ref = useRef<HTMLInputElement>(null)
    const {isDarkMode} = useTheme();
    return (
        <Form onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) onSearch(ref.current.value)
        }}>
            <InputGroup className="custom-search d-flex">
                <InputGroup.Text>
                    <FaSearch size={20}/>
                </InputGroup.Text>
                <Form.Control
                    ref={ref}
                    type="search"
                    placeholder="Search games..."
                    className="search-input"
                    style={{
                        background: isDarkMode ? '' : '#e6f8eb',
                        color: isDarkMode ? 'white' : 'black',
                    }}
                />
            </InputGroup>
        </Form>
    );
};

export default SearchInput;
