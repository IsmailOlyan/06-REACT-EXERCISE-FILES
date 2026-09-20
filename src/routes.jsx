// routes.js
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

export default router;
