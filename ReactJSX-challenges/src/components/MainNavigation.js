import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              // style={({ isActive }) => ({
              //   textAlign: isActive ? 'center' : 'left',
              // })}
              end
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/helloworld"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              HelloWorld
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/counters"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              counter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/todolist"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Todoslist
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
