import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/ui/Layout';
import CreateGamePage from './pages/CreateGamePage/rootCreateGamePage';
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
          path: "/",
          element: <ViewPage />,
        },
        {
          path: "/create",
          element: <CreateGamePage />,
        },
        {
          path: "master",
          element: <MasterPage />,
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