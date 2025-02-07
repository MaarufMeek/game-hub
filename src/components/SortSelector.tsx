import {Dropdown} from "react-bootstrap";


interface Props {
    onSelectSortOder: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({onSelectSortOder, sortOrder}: Props) => {
    const sortOrders = [
        {value: '', label: "Relevance"},
        {value: '-added', label: "Date Added"},
        {value: 'name', label: "Name"},
        {value: '-released', label: "Release date"},
        {value: '-metacritic', label: "Popularity"},
        {value: '-rating', label: "Average rating"},
    ]

    const currentSortOrderLabel =
        sortOrders.find(order => order.value === sortOrder)?.label || "Relevance";

    return (
        <Dropdown className="mx-2 my-3">
            <Dropdown.Toggle
                className="fw-bold text-white"
                variant="outline-secondary">
                {/*{selectedPlatform?.name || "Platforms"}*/}
                Order by: {currentSortOrderLabel}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {sortOrders.map(order =>
                    <Dropdown.Item
                        key={order.value}
                        onClick={() => onSelectSortOder(order.value)}
                    >
                        {order.label}
                    </Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default SortSelector;