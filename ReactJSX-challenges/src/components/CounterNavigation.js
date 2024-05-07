import { NavLink } from 'react-router-dom';

import classes from './CounterNavigation.module.css';

function CountersNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/counters"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              ClassCounter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/counters/fun"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              CounterFun
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default CountersNavigation;
