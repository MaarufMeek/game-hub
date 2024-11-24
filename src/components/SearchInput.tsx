import React, {useRef} from "react";
import {Form, InputGroup} from "react-bootstrap";
import {FaSearch} from "react-icons/fa";

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({onSearch}: Props) => {
    const ref = useRef<HTMLInputElement>(null)
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
                />
            </InputGroup>
        </Form>
    );
};

export default SearchInput;
