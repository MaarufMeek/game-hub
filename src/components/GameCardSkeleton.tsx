import React from 'react';
import Placeholder from 'react-bootstrap/Placeholder';
import Card from 'react-bootstrap/Card';
import {Stack} from "react-bootstrap";
import {useTheme} from "./ThemeContext";

const GameCardSkeleton = () => {
    const {isDarkMode} = useTheme();

    return (
        <Card className="card-skeleton" style={{background: isDarkMode ? "#282c34" : "#c9eef6"}}>
            <Card.Body style={{marginTop: '185px'}}>
                <hr className="hr-height rounded"/>
                <Placeholder as={Card.Text} animation="glow">
                    <Stack direction="horizontal"
                           style={{gap: '5px', display: 'flex'}}
                    >
                        <Placeholder xs={1} className="rounded p-holder-height"/>
                        <Placeholder xs={1} className="rounded p-holder-height"/>
                        <Placeholder xs={1} className="rounded p-holder-height"/>
                        <Placeholder xs={1} className="rounded p-holder-height"/>
                        <Placeholder xs={1} className="ms-auto rounded rounded p-holder-height"/>
                    </Stack>
                </Placeholder>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={12} className="rounded" style={{height: '25px'}}/>
                </Placeholder>
            </Card.Body>
        </Card>
    );
};


export default GameCardSkeleton;
