import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SignInPage from './Pages/SignInPage';
import About from './Pages/About';
import ForgotPassword from './Pages/ForgotPassword';
import Transportation from './Pages/Transportation';
import reportWebVitals from './reportWebVitals';
import { Link,RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Grades from './Pages/Grades';
import HelpPage from './Pages/HelpPage';
import AccountPage from './Pages/AccountPage';
import LanguagePage from './Pages/LanguagePage';
import SettingsPage from './Pages/SettingsPage';
import ClassesPage from './Pages/ClassesPage';
import CgpaPage from './Pages/CgpaPage';
import CurrentGradesPage from './Pages/CurrentGradesPage';
import GradeListPage from './Pages/GradeListPage';
import SearchGradePage from './Pages/SearchGradePage';
import Payment from './Pages/Payment';
const router=createBrowserRouter([
  {path:"/",element:<SignInPage/>},
  {path:"/forgetPassword",element:<ForgotPassword/>},
  {path:"/transport",element:<Transportation/>},
  {path:"/homePage",element:<HomePage/>},
  {path:"/about",element:<About/>},
  {path:"/grades",element:<Grades/>},
  {path:"/help",element:<HelpPage/>},
  {path:"/account",element:<AccountPage/>},
  {path:"/language",element:<LanguagePage/>},
  {path:"/setting",element:<SettingsPage/>},
  {path:"/classes",element:<ClassesPage/>},
  {path:"/cgpa",element:<CgpaPage/>},
  {path:"/currentgrades",element:<CurrentGradesPage/>},
  {path:"/gradelist",element:<GradeListPage/>},
  {path:"/search",element:<SearchGradePage/>},
  {path:"/payment",element:<Payment/>},
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
