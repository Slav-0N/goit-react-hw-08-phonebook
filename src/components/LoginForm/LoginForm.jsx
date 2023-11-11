import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
} from '@mui/material';
import { Notify } from 'notiflix';
import { NavLink } from 'react-router-dom';

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '500px',
  margin: '50px auto',
};

const labelStyles = {
  marginTop: '2rem',
};

const inputStyles = {
  width: '100%',
  marginBottom: '26px',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(`${originalPromiseResult.user.name} welcome back!`);
      })
      .catch(() => {
        Notify.failure('Incorrect login or password');
      });

    form.reset();
  };

  return (
    <form style={formStyles} onSubmit={handleSubmit} autoComplete="off">
      <FormControl sx={{ paddingBottom: '20px' }}>
        <InputLabel htmlFor="email" sx={{ labelStyles }}>
          Email
        </InputLabel>
        <Input
          id="email"
          type="email"
          name="email"
          pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
          title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
          required
          placeholder="Email"
          variant="outlined"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          type="password"
          name="password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
          required
          placeholder="Password"
          style={inputStyles}
        />
      </FormControl>
      <Button type="submit" sx={{ bgcolor: 'turquoise', mb: '20px' }}>
        LogIn
      </Button>
      <Typography>
        <NavLink to="/register">or sign up!</NavLink>
      </Typography>
    </form>
  );
};

export default LoginForm;
