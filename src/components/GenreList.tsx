import useGenres from "../hooks/useGenres";
import {Image, ListGroup, ListGroupItem, Stack} from "react-bootstrap";
import getCroppedImageUrl from "../services/image-urls";

const GenreList = () => {
    const {data, error, isLoading} = useGenres();
    return (
        <>
            {error && <p className="text-danger">{error}</p>}
            <ListGroup as="ul" className="">
                {data.map(genre =>
                    <ListGroupItem key={genre.id} as="li" className="p-0 py-2 border-0">
                        <Stack direction="horizontal" className="gap-md-2">
                            <Image src={getCroppedImageUrl(genre.image_background)} className="img-32 rounded"/>
                            {genre.name}
                        </Stack>
                    </ListGroupItem>)}
            </ListGroup>
        </>

    )
}

export default GenreList;
