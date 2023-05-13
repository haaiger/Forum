import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { ILoginForm, useAppDispatch, useAppSelector } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { loginThunk } from "../../redux/thunk/authThunk";

const initialState: ILoginForm = {
  email: "",
  password: "",
};

export const LoginForm: React.FC = () => {
  const [loginFormData, setLoginFormData] = useState<ILoginForm>(initialState);
  const errorMessage = useAppSelector((state) => state.user.isErrorLogin);
  const isAuthUser = useAppSelector((state) => state.user.isAuthUser);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await dispatch(loginThunk(loginFormData));
      setTimeout(() => navigate("/home"), 1500);
    } catch (error) {
      console.log(error);
    }
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
      {isAuthUser && (
        <Box mt={2} p={2} bgcolor="success.main" color="white">
          Вы успешно вошли, перенаправляем на домашнюю страницу!
        </Box>
      )}
      {errorMessage && (
        <Box mt={2} p={2} bgcolor="error.main" color="white">
          Не удалось войти, проверьте введенные данные.
        </Box>
      )}
    </Container>
  );
};
