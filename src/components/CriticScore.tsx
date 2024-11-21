import {Badge} from "react-bootstrap";

interface Props {
    score: number
}

const CriticScore = ({score}: Props) => {
    const color = score > 75 ? 'success'
        : score > 60 ? 'warning' : 'info';
    return <Badge className="mt-3" bg={color}>{score}</Badge>;
};

export default CriticScore