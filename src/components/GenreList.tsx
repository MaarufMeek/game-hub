import useGenres, {Genre} from "../hooks/useGenres";
import {Image, ListGroup, ListGroupItem, Stack} from "react-bootstrap";
import getCroppedImageUrl from "../services/image-urls";
import GenreCardSkeleton from "./GenreCardSkeleton";
import React from "react";
import {useTheme} from "./ThemeContext";


interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
    const {data, error, isLoading} = useGenres();
    const {isDarkMode} = useTheme()

    if (error) return null;

    const skeleton = [...Array(12)];
    return (
        <>

            <h1 className="fs-3">Genres</h1>
            <ListGroup as="ul" className="p-0 " style={{background: !isDarkMode ? '' : '#212529'}}>
                {isLoading && skeleton.map((_, index) => (
                    <ListGroupItem key={index} as="li" className="p-0 py-1 border-0">
                        <GenreCardSkeleton/>
                    </ListGroupItem>
                ))}
                {data?.results.map((genre, index) => (
                    <ListGroupItem key={genre.id || index}
                                   as="li"
                                   className={`p-0 border-0 my-1 ${isDarkMode ? '' : 'list-group'}`}
                    >
                        <Stack
                            direction="horizontal"
                            className={`gap-md-2 ${genre.id === selectedGenre?.id ?
                                'genre-list-selected' : 'genre-list'}`}
                            role="button"
                            onClick={() => onSelectGenre(genre)}
                            style={{color: isDarkMode ? 'white' : 'black'}}
                        >
                            <Image src={getCroppedImageUrl(genre.image_background)} className="img-32 rounded"/>
                            {genre.name}
                        </Stack>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </>
    )
        ;
};


export default GenreList;
