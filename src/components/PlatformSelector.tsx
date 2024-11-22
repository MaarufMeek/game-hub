import {Dropdown} from "react-bootstrap";
import usePlatforms from "../hooks/usePlatforms";


const PlatformSelector = () => {
    const {data, error} = usePlatforms()

    if (error) return null;
    return (
        <Dropdown className="mx-2 my-3">
            <Dropdown.Toggle variant="success">Platforms</Dropdown.Toggle>
            <Dropdown.Menu>
                {data.map(platform =>
                    <Dropdown.Item key={platform.id}>{platform.name}</Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default PlatformSelector