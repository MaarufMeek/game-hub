import React, {useEffect, useState} from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div style={{fontSize: "2rem", textAlign: "center", margin: "20px"}}>
            {time}
        </div>
    );
};

export default Clock;
