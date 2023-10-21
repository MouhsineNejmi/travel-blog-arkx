import { styled } from 'styled-components';

export const PopularPostWrapper = styled.div`
  display: flex;
  gap: 15px;
  height: 100px;
  margin-bottom: 10px;

  .bg-grey {
    width: 35%;
    background-color: #868383;
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  .popular-post-info {
    font-size: 8px;
    width: 65%;

    h3 {
      font-size: 14px;
      margin-bottom: 8px;
    }

    .card-links {
      font-size: 10px;
    }

    .post-info {
      margin-bottom: 0;

      .separator {
        width: 15px;
      }
    }
  }
`;
