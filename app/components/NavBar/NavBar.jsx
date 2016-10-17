import React  from 'react';
import { Link } from 'react-router';
import { navBar, home} from './styles.css';

const NavBar = () => (
  <div className={navBar}>
    <Link to="/" className={home}>Home</Link>
  </div>
);
export default NavBar;
