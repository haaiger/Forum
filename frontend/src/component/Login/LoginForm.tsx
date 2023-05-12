import React, { useState, ChangeEvent, FormEvent } from "react";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";
import { login } from "../../redux/slices/userSlices";
import { useDispatch } from "react-redux";
import { ILoginForm } from "../../types/types";

const initialState: ILoginForm = {
  email: "",
  password: "",
};

export const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<ILoginForm>(initialState);
  const dispatch = useDispatch();

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login(formData));
    console.log(formData);
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
              value={formData.email}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              type="password"
              fullWidth
              value={formData.password}
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
    </Container>
  );
};
