import React, { useState, useEffect } from "react";

const CounterLimit = () => {
    const [count, setCount] = useState(0);
    const [showBox, setShowBox] = useState(false);

    useEffect(() => {
        if (count === 5) {
            setShowBox(true);
        } else {
            setShowBox(false);
        }
    }, [count]);

    return (
        <div className="d-flex flex-column align-items-center vh-100">
            <h1 className="mb-4">Counter Application</h1>
            <div className="counter-display mb-3">
                <h2>The counter value is</h2>
                <div className="display-4">{count}</div>
            </div>
            <div className="d-flex justify-content-center mb-3">
                <input
                    type="button"
                    className="btn btn-primary mx-2"
                    value="Increase Counter"
                    onClick={() => setCount(count + 1)}
                />
                <input
                    type="button"
                    className="btn btn-secondary mx-2"
                    value="Decrease Counter"
                    onClick={() => setCount(count - 1)}
                />
            </div>

            {showBox && (
                <div
                    className="alert alert-warning mt-3"
                    style={{ width: '100%', textAlign: 'center' }}
                >
                    You have crossed the max limit!
                </div>
            )}
        </div>
    )
}
export default CounterLimit;