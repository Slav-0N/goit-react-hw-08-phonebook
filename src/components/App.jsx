import UserList from './UserList/UserList';
import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Registration from './Pages/Registration';
import Login from './Pages/Login';
import { Suspense } from 'react';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/about">Login</StyledLink>
        {/* <StyledLink to="/registration">Registration</StyledLink> */}
      </nav>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/about" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
};
