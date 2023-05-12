import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { registration } from "../../redux/slices/userSlices";
import { IUser, useAppDispatch } from "../../types/types";
import { registrationThunk } from "../../redux/thunk/authThunk";
import { useNavigate } from "react-router-dom";

const initialState: IUser = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export const RegistrationForm: React.FC = () => {
  const [registrationFormData, setRegistrationFormData] =
    useState<IUser>(initialState);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRegistrationFormData({
      ...registrationFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(registrationThunk(registrationFormData));
    dispatch(registration(registrationFormData));
    setIsRegistered(true);
    setTimeout(() => {
      setIsRegistered(false);
      navigate("/home");
    }, 1500);
    console.log(registrationFormData);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="firstName"
              label="First Name"
              fullWidth
              value={registrationFormData.firstName}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="lastName"
              label="Last Name"
              fullWidth
              value={registrationFormData.lastName}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              fullWidth
              value={registrationFormData.email}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              type="password"
              fullWidth
              value={registrationFormData.password}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid item xs={12}>
        <Button
          onClick={handleLogin}
          variant="contained"
          color="success"
          fullWidth
        >
          Авторизоваться
        </Button>
      </Grid>
      {isRegistered && (
        <Box mt={2} p={2} bgcolor="success.main" color="white">
          Вы успешно вошли!
        </Box>
      )}
    </Container>
  );
};
