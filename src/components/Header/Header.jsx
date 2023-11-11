import { useNavigate } from 'react-routet-dom';

const Header = () => {
  const navigate = useNavigate();

  return <button onClick={() => navigate('/login')}>Login</button>;
};

export default Header;
