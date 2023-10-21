import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const CategoryContainer = styled(Link)`
  position: relative;
  background: url(${props => props.$img});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-size: cover;
  height: 220px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  transition: all .3s;

  &:hover .layer {
    background-color: rgba(32, 32, 32, .4);
  }

  h3 {
    position: relative;
    color: #fff;
    z-index: 1;
    font-size: 18px;
    font-weight: 400;
  }
`;

export const Layer = styled.div`
  background-color: rgba(32, 32, 32, .6);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;