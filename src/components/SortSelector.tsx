import {Dropdown} from "react-bootstrap";


const SortSelector = () => {
    return (
        <Dropdown className="mx-2 my-3">
            <Dropdown.Toggle
                className="fw-bold"
                variant="success">
                {/*{selectedPlatform?.name || "Platforms"}*/}
                Order by: Relevance
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>Relevance</Dropdown.Item>
                <Dropdown.Item>Date Added</Dropdown.Item>
                <Dropdown.Item>Name</Dropdown.Item>
                <Dropdown.Item>Release Date</Dropdown.Item>
                <Dropdown.Item>Popularity</Dropdown.Item>
                <Dropdown.Item>Average Rating</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default SortSelector;