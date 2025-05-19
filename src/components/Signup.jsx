import React, { useEffect, useState } from "react";
import '../styles/Signup.css';
import quoteIcon from './Assets/quote.png'; // Import the image

//The text will appear with a typing effect
const Signup = () => {
    const fullText = `Life is too hard. That's why we have dedicated our lives, to make it easier for you.`;
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText[index]);
                setIndex((prev) => prev + 1);
            }, 40); //typing speed 
            return () => clearTimeout(timeout);
        }
    }, [index, fullText]);

    return (
        <div className="signup-page">
            <div className="quote-box">
                <img src={quoteIcon} alt="Quote Icon" className="quote-icon-img" />
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

                <div className="forgot-password">Already Have an Account? <span>Sign In</span></div>

                <div className="submit-container">
                    <div className="submit">Let's Go {">>>>>"}</div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
