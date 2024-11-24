import React from "react";
import {Form, InputGroup} from "react-bootstrap";
import {FaSearch} from "react-icons/fa";

const SearchInput = () => {
    return (
        <InputGroup className="custom-search d-flex">
            <InputGroup.Text>
                <FaSearch size={20}/>
            </InputGroup.Text>
            <Form.Control

                type="search"
                placeholder="Search games..."
                className="search-input"
            />
        </InputGroup>
    );
};

export default SearchInput;
