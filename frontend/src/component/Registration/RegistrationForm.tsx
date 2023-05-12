import React, { useState, ChangeEvent, FormEvent } from "react";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { registration } from "../../redux/slices/userSlices";
import { IUser } from "../../types/types";

const initialState: IUser = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<IUser>(initialState);
  const dispatch = useDispatch();

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(registration(formData));
    console.log(formData);
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
              value={formData.firstName}
              onChange={handleFormChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="lastName"
              label="Last Name"
              fullWidth
              value={formData.lastName}
              onChange={handleFormChange}
            />
          </Grid>
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
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
