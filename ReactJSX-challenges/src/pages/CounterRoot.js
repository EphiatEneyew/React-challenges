import { Outlet } from 'react-router-dom';

import CountersNavigation from '../components/CounterNavigation';

function CountersRootLayout() {
  return (
    <>
      <CountersNavigation />
      <Outlet />
    </>
  );
}

export default CountersRootLayout;
