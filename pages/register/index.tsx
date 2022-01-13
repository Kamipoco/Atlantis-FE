import { Header } from '@components/register/header';
import { RegisterForm } from '@components/register/form';
import type { NextPage } from 'next';
const Register: NextPage = () => {
  return (
    <>
      <Header />
      <RegisterForm />
    </>
  );
};

export default Register;
