import {Col} from "react-bootstrap";
import GenreList from "./GenreList";
import React from "react";


interface Props {
    darkMode: boolean;
}

const Aside = ({darkMode}: Props) => {
    return (
        <>

            <Col lg={2} className="p-4 text-white d-none d-lg-block"
                 style={{
                     backgroundColor: `${darkMode ? '' : 'white'}`
                 }}
            >
                <div style={{color: `${darkMode ? 'white' : 'black'}`}}>
                    <GenreList/>
                </div>
            </Col>
        </>
    )

}

export default Aside;