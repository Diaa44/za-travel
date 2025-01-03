import { Route, Routes } from 'react-router-dom';

import AuthLayout from '@features/ui/layout/AuthLayout';
import HomePage from '@pages/home';
import Login from '@pages/login';
import NotFoundPage from '@pages/not-found';
import SignUp from '@pages/sign-up';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<AuthLayout />}>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/NotFoundPage" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
