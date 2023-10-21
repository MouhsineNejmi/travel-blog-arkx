import { useRef, useState, useEffect } from 'react';
import { SignInWrapper } from './sign-in.style';

import { useDispatch, useSelector } from 'react-redux';
import {
  setUserCredentials,
  selectCurrentToken,
} from '../../features/auth/auth.slice';
import { useSignInMutation } from '../../features/auth/authApi.slice';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { useNavigate } from 'react-router-dom';

const SingIn = () => {
  const currentToken = useSelector(selectCurrentToken);
  const errRef = useRef();
  const [user, setUser] = useState({ email: '', password: '' });
  const [errMsg, setErrMsg] = useState('');

  const [signIn, { isLoading }] = useSignInMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setErrMsg('');

    currentToken && navigate('/post');
  }, [currentToken, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = user;

    try {
      const userData = await signIn({ email, password }).unwrap();
      dispatch(setUserCredentials({ ...userData }));

      navigate('/post');
      setUser({ email: '', password: '' });
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrMsg('No server response');
      } else if (err.originalStatus === 400) {
        setErrMsg('Missing email or password');
      } else if (err.originalStatus === 401) {
        setErrMsg('Unathorized');
      } else {
        setErrMsg('Error SignIn');
      }
      errRef.current.focus();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const handleLoginWithGoogle = (e) => {
    e.preventDefault();

    console.log('Login with google');
  };

  isLoading && <h1>Loading...</h1>;

  return (
    <SignInWrapper>
      <h2>I Already Have An Account</h2>
      <span>Please enter your details to sign in</span>

      <p ref={errRef} className={`${errMsg} ? 'err-msg' : 'hidden'`}>
        {errMsg}
      </p>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          label='Email'
          placeholder='Email'
          value={user.email}
          handleChange={handleChange}
          required
        />

        <FormInput
          name='password'
          type='password'
          label='Password'
          placeholder='Password'
          value={user.password}
          handleChange={handleChange}
          required
        />

        <div className='singin-buttons'>
          <CustomButton type='submit'>SIGN IN</CustomButton>
          <CustomButton onClick={handleLoginWithGoogle}>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </SignInWrapper>
  );
};

export default SingIn;
