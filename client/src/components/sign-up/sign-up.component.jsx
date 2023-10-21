import { useState } from 'react';
import { SignUpWrapper } from './sign-up.style';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const SignUp = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = user;

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    try {
      console.log({ username, email, password, confirmPassword });
      setUser({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <SignUpWrapper>
      <h2>
        New To <span className='logo-span'>Travel</span> Blog!
      </h2>
      <span>Travel e Please enter your details to sign up</span>

      <form className='signup-form' onSubmit={handleSubmit}>
        <FormInput
          name='username'
          type='text'
          label='Username'
          placeholder='Username'
          value={user.username}
          handleChange={handleChange}
          required
        />

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
          placeholder='password'
          value={user.password}
          handleChange={handleChange}
          required
        />

        <FormInput
          name='confirmPassword'
          type='password'
          label='Confirm Password'
          placeholder='Confirm password'
          value={user.confirmPassword}
          handleChange={handleChange}
          required
        />

        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </SignUpWrapper>
  );
};

export default SignUp;
