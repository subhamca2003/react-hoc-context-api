import React, { useState } from 'react';

// Simulated API call
const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched from API");
        }, 2000);
    });
};

const fetchDataWithCallback = (callback) => {
    setTimeout(() => {
        callback("Data fetched from API with callback");
    }, 2000);
};

const SamplePromiseComponent = () => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);

    // Using a callback method
    const handleCallbackFetch = () => {
        setLoading(true);
        fetchDataWithCallback((result) => {
            setData(result);
            setLoading(false);
        });
    };

    // Using a Promise
    const handlePromiseFetch = () => {
        setLoading(true);
        fetchData()
            .then((result) => {
                setData(result);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // Using async/await
    const handleAsyncFetch = async () => {
        setLoading(true);
        const result = await fetchData();
        setData(result);
        setLoading(false);
    };

    return (
        <div>
            <h1>Data Fetching Example</h1>
            {loading && <p>Loading...</p>}
            <p>{data}</p>
            <button onClick={handleCallbackFetch}>Fetch with Callback</button>
            <button onClick={handlePromiseFetch}>Fetch with Promise</button>
            <button onClick={handleAsyncFetch}>Fetch with Async/Await</button>
        </div>
    );
};

export default SamplePromiseComponent;