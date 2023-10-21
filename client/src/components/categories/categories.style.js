import { styled } from 'styled-components';
import LeftIcon from '../../assets/icons/left-icon.svg';
import RightIcon from '../../assets/icons/right-icon.svg';

export const CategoriesContainer = styled.section`
  padding: 100px 0;
  margin-top: 100px;
  position: relative;
  transform: scale(1);

  .swiper-button-prev,
  .swiper-button-next {
    position: fixed;
    top: 60%;

    &:before {
      content: url(${LeftIcon});
      filter: ${({ theme }) => theme.invert};
    }
    &:after {
      content: '';
    }
  }

  .swiper-button-prev {
    left: -80px;
  }

  .swiper-button-next {
    right: -80px;

    &:before {
      content: url(${RightIcon});
    }
  }

  .swiper-pagination {
    position: fixed;
    transition: all 0.3s;
    bottom: 50px;

    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background-color: rgba(255, 169, 2, 0.7);
    }
    .swiper-pagination-bullet-active {
      width: 14px;
      height: 14px;
      background-color: #ffa902;
    }
  }
`;
