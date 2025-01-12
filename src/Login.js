import React, { useState, useEffect } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function Login() {
  const [user, setUser] = useState(null);

  // Când aplicația se încarcă, verificăm dacă utilizatorul este deja conectat
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Restaurăm utilizatorul din localStorage
    }
  }, []);

  const handleLoginSuccess = (response) => {
    try {
      const decoded = jwtDecode(response.credential);
      const userData = {
        name: decoded.name,
        email: decoded.email,
        picture: decoded.picture,
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData)); // Stocăm datele utilizatorului în localStorage
      console.log('Login Success:', decoded);
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  };

  const handleLoginFailure = (error) => {
    console.error('Login Failed:', error);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Ștergem datele utilizatorului din localStorage
    console.log('User logged out');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Google Login Demo</h1>
      <GoogleOAuthProvider clientId="521024946631-ibsr49ji05akim0gef1bddvtkm5f45ho.apps.googleusercontent.com">
        {user ? (
          <div>
            <h3>User Info</h3>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <img
              src={user.picture}
              alt="Profile"
              style={{ borderRadius: '50%', marginTop: '10px' }}
            />
            <br />
            <button
              onClick={handleLogout}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: '#d9534f',
                color: 'white',
                borderRadius: '5px',
              }}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginFailure}
            useOneTap
          />
        )}
      </GoogleOAuthProvider>
    </div>
  );
}

export default Login;
