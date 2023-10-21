import { styled } from 'styled-components';

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 10px;
  padding: 10px 30px;
  background-color: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s;

  &:hover {
    background-color: #ffa902;
    color: #fff;
    border: 1px solid ${({ theme }) => theme.toggleBorder};
  }
`;
