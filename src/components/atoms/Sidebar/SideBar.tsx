import React from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
  { name: 'Notes', route: '/' },
  { name: 'Power station', route: '/power' },
  { name: 'History', route: '/history' },
  { name: 'List all commands', route: '/commands' },
];

const SideBar = () => (
  <ul className="p-4 flex flex-col gap-2" role="navigation">
    {routes.map((el, i) => (
      <NavLink
        key={i}
        to={el.route}
        role="link"
        className={({ isActive }) =>
          isActive ? 'bg-slate-400 rounded' : undefined
        }
      >
        <p className="p-2">{el.name}</p>
      </NavLink>
    ))}
  </ul>
);

export default SideBar;
