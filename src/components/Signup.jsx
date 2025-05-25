import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import '../styles/Signup.css';
// import quoteIcon from '../../public/quote.png'; // Import the image

//The text will appear with a typing effect

const Signup = ({signup}) => {
    const navigate = useNavigate(); // Hook to get the navigate function
    const fullText = `Life is too hard. That's why we have dedicated our lives, to make it easier for you.`;
    const words = useMemo(() => fullText.split(" "), []); // Memoize the array

    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < words.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + (prev ? " " : "") + words[index]);
                setIndex((prev) => prev + 1);
            }, 280); // typing speed
            return () => clearTimeout(timeout);
        }
    }, [index, words]);

    //navigating to the Login page incase a user has no account
    const handleClick = () => {
    // Redirect to profile setup page or perform any other navigation logic
    //navigate('/profile'); // Use navigate function for navigation
        navigate('/login'); // Use navigate function for navigation

  };

    return (
        <div className="signup-page">
            <div className="quote-box">
                {/* <img src={quoteIcon} alt="Quote Icon" className="quote-icon-img" /> */}
                <div className="quote-text">{text}</div>
            </div>

            <div className='container'>
                <div className="header">
                    <div className="text">Let's get started</div>
                </div>

                <div className="inputs">
                    <div className="input"><input type="text" placeholder='First Name' /></div>
                    <div className="input"><input type="text" placeholder='Last Name' /></div>
                    <div className="input"><input type="text" placeholder='Email' /></div>
                    <div className="input"><input type="password" placeholder='Password' /></div>
                </div>

                <div className="forgot-password">Already Have an Account? <span onClick={handleClick} style={{cursor: 'pointer', color: 'blue'}}>Sign In</span>
                </div>

                <div className="button-container">
                    <button type="button" onClick={handleClick}>Let's Go {">>>>>"}</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
