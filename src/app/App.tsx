import { Route, Routes } from 'react-router-dom';
import AuthLayout from '@features/ui/layout/AuthLayout';
import Login from '@pages/login';
import NotFoundPage from '@pages/not-found';
import SignUp from '@pages/sign-up';
import Home from '@pages/Home';
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<AuthLayout />}>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/NotFoundPage" element={<NotFoundPage />} />
      </Route>
     
    </Routes>
  );
}