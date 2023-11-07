import { signUp } from 'api/auth';
import FormRegistration from 'components/Form/FormRegistration';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const registration = async body => {
    try {
      await signUp(body);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return <FormRegistration registration={registration} />;
};

export default Registration;
