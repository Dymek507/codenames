import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/ui/Layout';
import CreateGamePage from './pages/CreateGamePage';
import HomePage from './pages/HomePage';
import MasterPage from './pages/MasterPage';
import ViewPage from './pages/ViewPage';
import store from './store/store';
import { Provider } from 'react-redux';



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "create",
          element: <CreateGamePage />,
        },
        {
          path: "master",
          element: <MasterPage />,
        },
        {
          path: "view",
          element: <ViewPage />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider
        router={router}
      ></RouterProvider>
    </Provider>

  );
}

export default App;