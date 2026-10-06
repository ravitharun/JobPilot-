
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobAutomation from './Pages/JobAutomation.tsx';
import PageNotFound from './Pages/PageNotFound.tsx';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>

    <Routes>

      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<App />} />
      <Route path="/Automation" element={<JobAutomation />} />

    </Routes>
  </BrowserRouter>
)
