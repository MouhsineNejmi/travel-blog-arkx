import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const ExploreCardContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.15);

  .bg-grey {
    height: 290px;
    background-color: #868383;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const ExploreCardContent = styled.div`
  padding: 26px;

  h3 {
    font-size: 17px;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  p {
    color: #868383;
    font-size: 14px;
    font-weight: 300;
    line-height: 27px;
    margin-bottom: 10px;
  }
`;

export const ExploreCardLinks = styled.div`
  font-size: 14px;
  font-weight: 300;
`;

export const CategoryLink = styled(Link)`
  color: #ffa902;
  text-decoration: underline;
`;

export const ProfileLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  font-weight: 600;
`;
