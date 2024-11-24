import React from 'react';
import Placeholder from 'react-bootstrap/Placeholder';
import Card from 'react-bootstrap/Card';
import {Stack} from "react-bootstrap";

const GameCardSkeleton = () => {
    return (
        <Card style={{width: '100%', height: '100%'}}>
            <Card.Body style={{marginTop: '150px'}}>
                <hr className="hr-height rounded"/>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={12} className="rounded" style={{height: '25px'}}/>
                </Placeholder>
                <Placeholder animation="glow">
                    <div>
                        <Stack direction="horizontal"
                               style={{gap: '5px', display: 'flex'}}
                        >
                            <Placeholder xs={1} className="rounded p-holder-height"/>
                            <Placeholder xs={1} className="rounded p-holder-height"/>
                            <Placeholder xs={1} className="rounded p-holder-height"/>
                            <Placeholder xs={1} className="rounded p-holder-height"/>
                            <Placeholder xs={1} className="ms-auto rounded rounded p-holder-height"/>
                        </Stack>
                    </div>
                </Placeholder>
            </Card.Body>
        </Card>
    );
};

export default GameCardSkeleton;
