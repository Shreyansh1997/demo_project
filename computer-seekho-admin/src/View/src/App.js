import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MainContainer from './components/layout/MainContainer';
import { routes } from './routes';

const router = createBrowserRouter(routes)

function App() {
  return (
    <RouterProvider router={router} />
      
  );
}

export default App;
