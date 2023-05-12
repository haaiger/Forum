import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { login } from "../../redux/slices/userSlices";
import { ILoginForm, useAppDispatch } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { loginThunk } from "../../redux/thunk/authThunk";

const initialState: ILoginForm = {
  email: "",
  password: "",
};

export const LoginForm: React.FC = () => {
  const [loginFormData, setLoginFormData] = useState<ILoginForm>(initialState);
  const [isLoggined, setIsLoggined] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginThunk(loginFormData));
    dispatch(login(loginFormData));
    setIsLoggined(true);
    setTimeout(() => {
      navigate("/home");
    }, 1500);
    console.log(loginFormData);
  };

  const handleRegistration = () => {
    navigate("/registration");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Авторизация
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              fullWidth
              value={loginFormData.email}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              type="password"
              fullWidth
              value={loginFormData.password}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Войти
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid item xs={12}>
        <Button
          onClick={handleRegistration}
          variant="contained"
          color="success"
          fullWidth
        >
          Зарегистрироваться
        </Button>
      </Grid>
      {isLoggined && (
        <Box mt={2} p={2} bgcolor="success.main" color="white">
          Вы успешно вошли!
        </Box>
      )}
    </Container>
  );
};
