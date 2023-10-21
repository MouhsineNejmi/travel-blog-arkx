import { styled } from 'styled-components';

export const PostCardWrapper = styled.div`
  display: flex;
  height: 210px;
  gap: 20px;
  margin-bottom: 20px;

  .bg-grey {
    width: 50%;
    background-color: #868383;
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }
`;

export const PostCardInfo = styled.div`
  color: #868383;
  font-size: 14px;
  padding: 5px 0;
  width: 50%;

  h3 {
    font-size: 16px;
    margin-bottom: 12px;
    color: ${({ theme }) => theme.text};
  }

  .card-links {
    margin-bottom: 12px;
  }

  .post-info {
    display: flex;
    gap: 5px;
    align-items: center;
    margin-bottom: 19px;

    .separator {
      width: 30px;
      height: 1px;
      background-color: #868383;
    }

    .comments-count {
      color: #ffa902;
    }
  }

  .post-para {
    line-height: 26px;
    margin-bottom: 15px;
  }

  .read-more {
    color: #ffa902;
    text-transform: uppercase;
    font-weight: 500;
  }
`;
