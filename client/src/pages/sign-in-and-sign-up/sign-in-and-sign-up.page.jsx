import SingIn from '../../components/sign-in/sign-in.component';
import SingUp from '../../components/sign-up/sign-up.component';
import { SignInAndSignUpWrapper } from './sign-in-and-sign-up.style';

const SignInAndSignUp = () => {
  return (
    <SignInAndSignUpWrapper>
      <SingIn />
      <SingUp />
    </SignInAndSignUpWrapper>
  );
};

export default SignInAndSignUp;
