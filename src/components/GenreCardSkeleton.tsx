import {Image, ListGroup, ListGroupItem, Stack} from "react-bootstrap";
import Placeholder from "react-bootstrap/Placeholder";
import React from "react";


const GenreCardSkeleton = () => {
    return (
        <>
            <ListGroup as="ul">
                <ListGroupItem as="li" className="p-0 py-2 border-0">
                    <Stack direction="horizontal" className="gap-md-2 align-items-center">
                        <Placeholder
                            as={Image}
                            animation="glow"
                            className="img-32 rounded"
                            style={{
                                width: "38px",
                                height: "32px",
                                backgroundColor: "#a3a4a6",
                                border: "none"
                            }}
                        />

                        <Placeholder animation="glow" className="w-50">
                            <Placeholder xs={8} className="rounded p-holder-height"/>
                        </Placeholder>
                    </Stack>
                </ListGroupItem>
            </ListGroup>
        </>
    );
}

export default GenreCardSkeleton;