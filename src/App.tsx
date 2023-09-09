import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './pages/Root';
import ErrorPage from './pages/Error';
import Players from './pages/Players';
import Leagues from "./pages/Leagues";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Players />
      },
      {
        path: 'leagues',
        element: <Leagues />
      },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;