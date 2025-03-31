import React, { useEffect, useState } from "react";

const withLoading = (WrappedComponent, dataUrl) => {
    return (props) => {
        const [loading, SetLoading] = useState(true);
        const [data, SetData] = useState(null);
        const [error, SetError] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const dataList = await fetch(dataUrl);
                    if (!dataList.ok) {
                        throw new Error('Network issue');
                    }
                    const result = await dataList.json();
                    SetData(result);
                }
                catch (error) {
                    SetError(error.message);
                }
                finally {
                    SetLoading(false);
                }

            }
            fetchData();
        }, []);
        if (loading) {
            return <div>Data Loading in Progress...</div>;
        }
        if (error) {
            return <div>Error: {error}</div>;
        }
        return <WrappedComponent data={data} {...props} />
    }
};
export default withLoading;