import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../utils/firebaseConfig'
import { Box, Container, TextField, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoggedIn, setUser }) => { // param setUser di bawa dari app.js
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const userCredential =  await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredential.user; // the signed user information
      setUser({
        name: user.displayName || 'no name',
        email: user.email,
      })

      setLoggedIn(true)
      navigate('/')

    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#F1E3D3',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 3,
        }}
      >
        <Container maxWidth="sm">
          <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#FFFFFF' }}>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 3 }}>
              Login
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                sx={{ marginBottom: 2 }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#3E2723',
                  color: '#F1E3D3',
                  '&:hover': { backgroundColor: '#5D4037' },
                  paddingY: 1.5,
                  fontWeight: 'bold',
                  borderRadius: 2,
                }}
              >
                Login
              </Button>
            </form>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default Login;