import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateGamePage from './pages/CreateGamePage';
import HomePage from './pages/HomePage';
import JoinGamePage from './pages/JoinGamePage';
import ViewPage from './pages/ViewPage';



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "create",
          element: <CreateGamePage />,
        },
        {
          path: "join",
          element: <JoinGamePage />,
        },
        {
          path: "view",
          element: <ViewPage />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider
        router={router}
      ></RouterProvider>
    </div>
  );
}

export default App;
