import AdminHome from "./admin/AdminHome";
import AdminLogin from "./admin/AdminLogin";
import Enquiry from "./admin/Enquiry";
import Aboutus from "./components/layout/Aboutus";
import MainContainer from "./components/layout/MainContainer";
import Album from "./pages/Album";
import ContactUs from "./pages/ContactUs ";
import CompChamp from "./pages/courses/Compchamp";
import DAC from "./pages/courses/Dac";
import DBDA from "./pages/Dbda";
import Faculty from "./pages/Faculty";
import Gallary from "./pages/Gallary";
import Home from "./pages/Home";
import LittleChamp from "./pages/LittleChamp";
import Mscit from "./pages/Mscit";
import Placement from "./pages/Placement";
import SeniorCitizen from "./pages/SeniorCitizen";

export const routes = [
  {
    path: "/",
    element: <MainContainer />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/placement",
        element: <Placement />,
      },
      {
        path: "/about",
        element: <Aboutus />,
      },
      {
        path: "/Faculty",
        element:<Faculty/>
      },
      {
        path:"/ContactUs",
        element:<ContactUs/>
      },
      {
        path:"/Gallary",
        element:<Gallary/>
      },
      {
        path:"/DAC",
        element:<DAC/>
      },
      {
        path:"/DBDA",
        element:<DBDA/>
      },
      {
        path:"/MSCIT",
        element:<Mscit/>
      },
      {
        path:"/LittleChamp",
        element:<LittleChamp/>
      },
      {
        path:"/COMPCHAMP",
        element:<CompChamp/>
      },
      {
        path:"/Seniorcitizen",
        element:<SeniorCitizen/>
      },
      {
        path:"/Album",
        element:<Album/>
      },
     


    ],
  },
  {
    path:'/admin',
    element:<AdminLogin />,
    children:[
     {
      path:'home',
      element:<AdminHome />
     },
     {
      path:'Enquiry',
      element:<Enquiry/>
     },
     
    ]
  }
];
