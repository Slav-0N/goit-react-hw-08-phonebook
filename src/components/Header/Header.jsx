import { Link, NavLink, useNavigate } from 'react-routet-dom';

const Header = () => {
  // handleLogin = () => {};
  const navigate = useNavigate();

  return <button onClick={() => navigate('/login')}>Login</button>;
};

export default Header;
