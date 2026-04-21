import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layouts/MainLayout/MainLayout'; 
import Home from '../pages/Home/Page'
import { NotFound } from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home /> 
      }, 
      {
        path: 'about',
        element: <div>About</div>
      },
      {
        path: '*', 
        element: <NotFound /> 
      }
    ]
  }
]);