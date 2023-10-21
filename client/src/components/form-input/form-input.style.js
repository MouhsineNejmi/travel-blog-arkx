import { styled } from 'styled-components';

export const FormInputGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;

  .form-input {
    border: 1px solid #868383;
    border-radius: 5px;
    padding: 5px 10px;
    width: 90%;
    margin-bottom: 15px;

    &:focus {
      outline: none;
    }
  }

  .form-input[type='password'] {
    letter-spacing: 1.5px;

    &::placeholder {
      letter-spacing: 0px;
    }
  }

  .form-input-label {
    color: ${({ theme }) => theme.color};
    font-weight: 300;
    z-index: 0;
    margin-bottom: 5px;
  }
`;
