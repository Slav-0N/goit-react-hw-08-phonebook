import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
} from '@mui/material';

import { Notify } from 'notiflix';
import { NavLink } from 'react-router-dom';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: '50px auto',
  },
  label: {
    marginTop: '1rem',
  },
  input: {
    width: '100%',
    marginBottom: '1.5rem',
  },
  button: {
    backgroundColor: '',
    color: 'white',
    '&:hover': {
      backgroundColor: 'darkblue',
    },
  },
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [passwordError, setPasswordError] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isPasswordValid = password => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { name, email, password } = formData;

    if (!name || !email || !password) {
      Notify.failure('All fields are required');
      return;
    }

    if (!isPasswordValid(password)) {
      setPasswordError(
        'Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct.'
      );
      return;
    }

    dispatch(register(formData))
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(`${originalPromiseResult.user.name} welcome!`);
      })
      .catch(() => {
        Notify.failure("Sorry, something's wrong");
      });

    setFormData({
      name: '',
      email: '',
      password: '',
    });
    setPasswordError('');
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <FormControl variant="outlined">
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Name"
          required
          style={styles.input}
          value={formData.name}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth="true"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          id="email"
          type="email"
          name="email"
          pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zAZ0-9-]+)*$"
          title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
          placeholder="Email "
          required
          style={styles.input}
          value={formData.email}
          onChange={handleInputChange}
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
          placeholder="Password"
          required
          style={styles.input}
          value={formData.password}
          onChange={handleInputChange}
        />
        {passwordError && (
          <Typography color="error">{passwordError}</Typography>
        )}
      </FormControl>
      <Button type="submit" sx={{ bgcolor: 'turquoise', mb: '20px' }}>
        Register
      </Button>
      <Typography sx={{ color: 'primary' }}>
        <NavLink to="/login">or login</NavLink>
      </Typography>
    </form>
  );
};

export default RegisterForm;
