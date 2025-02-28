import { Typography } from '@mui/material';

import { APP_NAME } from '@config/constants';
import SingUpForm from '@features/auth/component/SignUpForm';

export default function SignUpPage() {
  return (
    <>
      <Typography component="h1" variant="h2" mb={1}>
        Sign Up
      </Typography>
      <Typography color="text.secondary" mb={4}>
        Become a user of {APP_NAME}
      </Typography>
      <SingUpForm />
    </>
  );
}
