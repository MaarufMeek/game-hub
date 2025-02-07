import {Dropdown} from "react-bootstrap";
import usePlatforms, {Platform} from "../hooks/usePlatforms";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {
    const {data, error} = usePlatforms()

    if (error) return null;
    return (
        <Dropdown>
            <Dropdown.Toggle
                className="fw-bold text-white"
                variant="outline-secondary">
                {selectedPlatform?.name || "Platforms"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {data?.results.map(platform =>
                    <Dropdown.Item key={platform.id}
                                   role="button"
                                   onClick={() => onSelectPlatform(platform)}
                    >{platform.name}</Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default PlatformSelector;