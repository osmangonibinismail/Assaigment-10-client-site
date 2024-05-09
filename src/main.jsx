import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './components/Provider/AuthProvider.jsx';
import AllArtAndCraptItems from './components/AllArtAndCraptItems/AllArtAndCraptItems.jsx';
import AddItem from './components/AddItem/AddItem.jsx';
import UpdateItem from './components/UpdateItem/UpdateItem.jsx';
import AddRoutes from './Routes/AddRoutes.jsx';
import MyArtRoutes from './Routes/MyArtRoutes.jsx';
import MyArt from './components/MyArt/MyArt.jsx';
import CategoryDetais from './components/Details/CategoryDetais.jsx';
import CategoryDetailsRoute from './Routes/CategoryDetailsRoute.jsx';
import SubCategoryDetails from './components/Details/SubCategoryDetails.jsx';
import SubCategoryDetailsRoutes from './Routes/SubCategoryDetailsRoutes.jsx';
import UpdateRoutes from './Routes/UpdateRoutes.jsx';
import AllArtDetails from './components/Details/AllArtDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://assaigment-10-server-site.vercel.app/craftItem')
      },
      
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/categoryDetails/:id',
        element: <CategoryDetailsRoute><CategoryDetais></CategoryDetais></CategoryDetailsRoute>
      },
      {
        path: '/subCategoryDetails/:id',
        element: <SubCategoryDetailsRoutes><SubCategoryDetails></SubCategoryDetails></SubCategoryDetailsRoutes>
      },
      {
        path: '/allArtDetails/:id',
        element: <AllArtDetails></AllArtDetails>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/AllArtAndCraptItems',
        element: <AllArtAndCraptItems></AllArtAndCraptItems>,
        loader: () => fetch('https://assaigment-10-server-site.vercel.app/craftItem')
      },
      {
        path: '/AddItem',
        element: <AddRoutes><AddItem></AddItem></AddRoutes>
      },
      {
        path: '/myArt',
        element: <MyArtRoutes><MyArt></MyArt></MyArtRoutes>,
        loader: () => fetch(`https://assaigment-10-server-site.vercel.app/add`)
      },
      {
        path: '/update/:id',
        element: <UpdateRoutes><UpdateItem></UpdateItem></UpdateRoutes>,
        loader: ({params}) => fetch(`https://assaigment-10-server-site.vercel.app/add/${params.id}`)
      }
      // {
      //   path: '/users',
      //   element: <Users></Users>,
      //   loader: () => fetch('https://assaigment-10-server-site.vercel.app/user')
      // }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
