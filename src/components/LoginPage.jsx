import React, { useEffect, useState } from "react";
import '../styles/Login.css';


const LoginPage = () => {
    const [username, setUsername] = useState(""); // ← this was missing!
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //checking if user is already logged in and store the 
    useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken === "dummy_token") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    // Simulate authentication
    if (username === "admin" && password === "admin") {
      if (rememberMe) {
        localStorage.setItem("token", "dummy_token");
      }
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };
   //handling the logout functionality
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };


  return (
      <div className="login-page">
        <h1>Sign In</h1>
          {isLoggedIn ? (
            <div>
              <h2>Welcome back, {username || "admin"}!</h2>
              <button onClick={handleLogout}>Logout</button>
            </div>
      ) : (

        <div className='container'>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />


          <label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
            Remember Me
          </label>
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
        )}
      </div>
    );
};

export default LoginPage;
