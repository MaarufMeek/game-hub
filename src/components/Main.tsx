import {Col} from "react-bootstrap";
import GameGrid from "./GameGrid";
import React from "react";


interface Props {
    darkMode: boolean;
}

const Main = ({darkMode}: Props) => {
    return (
        <>
            <Col xs={12} md={12} lg={10} className="p-4"
                 style={{
                     backgroundColor: `${darkMode ? '' : 'white'}`
                 }}
                 gap="4"
            >
                <h2>Main Content</h2>
                <GameGrid darkMode={darkMode}/>
            </Col>
        </>
    )

}

export default Main;