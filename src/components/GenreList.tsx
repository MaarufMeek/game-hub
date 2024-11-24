import useGenres, {Genre} from "../hooks/useGenres";
import {Image, ListGroup, ListGroupItem, Stack} from "react-bootstrap";
import getCroppedImageUrl from "../services/image-urls";
import GenreCardSkeleton from "./GenreCardSkeleton";


interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
    const {data, error, isLoading} = useGenres();

    if (error) return null;

    const skeleton = [...Array(12)];
    return (
        <ListGroup as="ul">
            {isLoading && skeleton.map((_, index) => (
                <ListGroupItem key={index} as="li" className="p-0 py-1 border-0">
                    <GenreCardSkeleton/>
                </ListGroupItem>
            ))}
            {data.map((genre, index) => (
                <ListGroupItem key={genre.id || index} as="li" className="p-0 py-1 border-0">
                    <Stack
                        direction="horizontal"
                        className={`gap-md-2 ${genre.id === selectedGenre?.id ? 'genre-list-selected' : 'genre-list'}`}
                        role="button"
                        onClick={() => onSelectGenre(genre)}
                    >
                        <Image src={getCroppedImageUrl(genre.image_background)} className="img-32 rounded"/>
                        {genre.name}
                    </Stack>
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};


export default GenreList;
