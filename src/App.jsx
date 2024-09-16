import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import Education from './pages/Education.jsx';
import Certificates from './pages/Certificates.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<About />} />
      <Route path='skills' element={<Skills />} />
      <Route path='projects' element={<Projects />} />
      <Route path='education' element={<Education />} />
      <Route path='certificates' element={<Certificates />} />
      {/* 
      <Route path='education' element={<Resume />} /> */}
    </Route>
  )
);

export default router;