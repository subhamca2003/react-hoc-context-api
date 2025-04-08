import { useState } from 'react';
import './PostComponent.css';

const PostComponent = (props) => {
    const [emailAddress, setEmailAddress] = useState('');

    const sendDataToParent = (email) => {
        setEmailAddress(email);
    }

    return (
        <div className="post-component d-flex justify-content-center align-items-center vh-50">
            <div className="email-display">
                <h2>I am the parent component:</h2>
                <p className="email-address">{emailAddress}</p>
            </div>
            <ChildComponent sendDataToParent={sendDataToParent} emailAddress={emailAddress} />
        </div>
    );
};

const ChildComponent = ({ sendDataToParent }) => {
    return (
        <div className="child-component">
            <h3>Enter your email:</h3>
            <div className="form-group">
                <input
                    type="email"
                    className="form-control"
                    placeholder="example@example.com"
                    onChange={(e) => sendDataToParent(e.target.value)} // Update local state and notify parent
                />
            </div>
        </div>
    );
};

export default PostComponent;