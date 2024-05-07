import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from 'react-router-dom';

import ErrorPage from './pages/Error';
//import HomePage from './pages/Home';
import LoginPage from './pages/LoginPage';
import RootLayout from './pages/Root';
import TodosApp from './todoList/TodosApp';
import CounterClassApp from './counter/counterClass';
import CounterFunApp from './counter/counterFun';
import CountersRootLayout from './pages/CounterRoot';
import HelloWorld from './pages/HelloWorldPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index:true, element: <LoginPage /> },
      { path: 'helloworld', element: <HelloWorld /> },
      { path: 'todolist', element: <TodosApp /> },
      {
        path: 'counters',
        element: <CountersRootLayout />,
        children: [
          { index: true, element: <CounterClassApp /> },
          { path: 'fun', element: <CounterFunApp /> },
        ],
      },
    ],
  }
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
