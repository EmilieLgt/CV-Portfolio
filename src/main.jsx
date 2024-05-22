
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ProjectsList from './components/Projects/ProjectsList.jsx';
import CompetencesList from './components/Competences/CompentencesList.jsx';
import DiplomsList from './components/Diploms/DisplomsList.jsx';
import ExperiencesList from './components/Experiences/ExperiencesList.jsx';
import Présentation from "./components/Présentation.jsx"
import Contact from './components/Contact.jsx';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Présentation />,
      },
      {
        path: "/projets",
        element: <ProjectsList />,
      },
      {
        path: "/CompetencesList",
        element: <CompetencesList />,
      },
      {
        path: "/diploms",
        element: <DiplomsList />,
      },
      {
        path: "/experiences",
        element: <ExperiencesList />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

