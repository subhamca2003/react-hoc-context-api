import React, { useEffect, useState } from 'react';

const DataList = ({ apiUrl, renderItem }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [apiUrl]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="container">
            <h1 className="mt-4">Listing</h1>
            <table className="table table-bordered table-striped mt-3">
                <thead className="thead-dark">
                    <tr>
                        {renderItem.header.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            {renderItem.renderRow(item)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataList;