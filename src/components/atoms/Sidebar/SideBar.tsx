import React from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
  { name: 'Records', route: '/' },
  { name: 'Pyrolysis', route: '/pyrolysis' },
  { name: 'Polyethylene', route: '/polyethylene' },
  { name: 'Power station', route: '/power' },
  { name: 'List all commands', route: '/commands' },
];

const SideBar = () => (
  <ul className="p-4 flex flex-col gap-2">
    {routes.map((el, i) => (
      <NavLink
        key={i}
        to={el.route}
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
