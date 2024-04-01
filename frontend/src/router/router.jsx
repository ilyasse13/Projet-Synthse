import { createBrowserRouter ,Navigate } from "react-router-dom";

import DefaultLayout from "../layouts/DefaultLayout";
import Main from "../pages/GetStarted/Main";
import StartedLayout from "../pages/GetStarted/StartedLayout";
import Success from "../pages/GetStarted/Success";
import Security from "../pages/GetStarted/Security";
import Faq from "../pages/GetStarted/Faq";
import Tutorial from "../pages/GetStarted/Tutorial";
import NotFound from "../pages/GetStarted/NotFound";
import AdminLayout from "../layouts/AdminLayout";
import SignUp from "../pages/Forms/SignUp";
import Why from "../pages/GetStarted/Why";
import Features from "../pages/GetStarted/Features";
import GuestLayout from "../pages/Forms/GuestLayout";
import Login from "../pages/Forms/Login";
import DashMain from "../pages/AppViews/DashMain";

const router = createBrowserRouter([
    {
      path: "/",
      element: <StartedLayout/>,
      children:[
        {
          path: "/main",
          element: <Navigate to='/'/>
        },
        {
          path: "/",
          element:<Main/>
        },
        {
          path: "/Testimonials",
          element: <Success/>
        },
        {
          path: "/Security",
          element:<Security/>
        },
        {
          path: "/FAQs",
          element:<Faq/>
        },
        {
          path:'/tuto',
          element: <Tutorial/>
        },
        {
          path:'/whyUs',
          element: <Why/>
        },
        {
          path:'/Features',
          element: <Features/>
        }
      ]
    },
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: '/dashboard',
          element: <DashMain/>
        },
        // {
        //   path: "/",
        //   element: <Dashboard />,
        // },
        
      ],
    },
    {
      path:'/admin',
      element:<AdminLayout/>,
      children: [
        {
          path:'/admin/main',
          element:<DashMain/>
        }
      ]
      
      
      
    },
    {
      element: <GuestLayout />,
      children: [
        {
          path: '/signup',
          element: <SignUp />
        },
        {
          path: '/login',
          element: <Login />
        }
      ]
    },
   
    
    {
      path:'*',
      element:<NotFound/>
    }
    

   
  ]);
  
  export default router;