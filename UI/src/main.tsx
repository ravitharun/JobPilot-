
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobAutomation from './Pages/JobAutomation.tsx';
import PageNotFound from './Pages/PageNotFound.tsx';
import { Provider } from 'react-redux';
import { store } from './Store/store.ts';
import Login from './Pages/Login.tsx';
import Signup from './Pages/SignUp.tsx';
import Profile from './Pages/Profile.tsx';
import Settings from './Pages/Settings.tsx';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Automation" element={<JobAutomation />} />
      </Routes>
    </Provider>
  </BrowserRouter>
)
