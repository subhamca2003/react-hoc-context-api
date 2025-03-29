import React, { useEffect, useState } from 'react';

// Higher-Order Component
const withLoading = (WrappedComponent, dataUrl) => {
  return (props) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(dataUrl);
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
    }, []);

    if (loading) {
      return <div>Loading...</div>; // Show loading indicator
    }

    if (error) {
      return <div>Error: {error}</div>; // Show error message
    }

    // Pass the fetched data as props to the wrapped component
    return <WrappedComponent data={data} {...props} />;
  };
};

export default withLoading;