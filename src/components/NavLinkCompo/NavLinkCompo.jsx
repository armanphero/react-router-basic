import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkCompo = ({ to, children }) => {
    // console.log(to, children);
    return (
        <NavLink to={to} className={({ isActive }) => isActive ? 'active' : ''}>{children}</NavLink>
    );
};

export default NavLinkCompo;