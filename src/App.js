import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
    const [result, setResult] = useState(null);
    const fetchdata = async () => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_API_URL}/test`
            );
            setResult(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    setTimeout(() => {
        fetchdata();
    }, 1000);

    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <div>
            <h3>This is Frontend homepage</h3>
            <h4>{result && result}</h4>
        </div>
    );
};

export default App;
