import styled from 'styled-components';

export const ToggleContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  width: 35px;
  height: 35px;

  input {
    display: none;
  }

  label {
    background: ${({ theme }) => theme.background};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
