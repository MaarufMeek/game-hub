import {Dropdown} from "react-bootstrap";
import usePlatforms, {Platform} from "../hooks/usePlatforms";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatformId?: number;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatformId}: Props) => {
    const {data, error} = usePlatforms()
    const platform = data?.results.find(p => p.id === selectedPlatformId)

    if (error) return null;
    return (
        <Dropdown>
            <Dropdown.Toggle
                className="fw-bold text-white"
                variant="outline-secondary">
                {platform?.name || "Platforms"}
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