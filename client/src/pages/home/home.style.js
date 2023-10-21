import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import FujiMountain from '../../assets/fuji_mountain.jpeg';

export const HomeContainer = styled.main``;

export const HeroSection = styled.div`
  height: 725px;
  max-width: 100vw;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 850px;
    object-fit: cover;
  }
`;

export const HeroLayer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 850px;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 0;
`;

export const HeroContent = styled.div`
  position: relative;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;

  h1 {
    font-size: 65px;
    padding-bottom: 20px;
  }

  p {
    max-width: 800px;
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    line-height: 25px;
    padding-bottom: 20px;
  }

  h3 {
    font-size: 30px;
    color: #ffa902;
    position: relative;
    z-index: 1;
  }
`;

export const ExploreContainer = styled.section`
  padding: 80px 0;
`;

export const ExploreCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

export const ExploreButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export const ExploreButton = styled(Link)`
  text-transform: capitalize;
  color: #fff;
  background-color: #ffa902;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 10px;
  transition: all 0.3s;

  &:hover {
    background-color: transparent;
    color: #ffa902;
    border: 1px solid #ffa902;
  }
`;

export const LatestBlogContainer = styled.section`
  padding-bottom: 50px;

  .all-posts {
    display: flex;
    gap: 60px;
    padding-top: 20px;
  }
`;

export const PostsCards = styled.div`
  width: 70%;
`;

export const PopularPosts = styled.div`
  width: 30%;
  height: fit-content;
  border-radius: 10px;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 25px;

  .popular-title {
    text-align: left;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const TravelTripsContainer = styled.section`
  position: relative;
  height: 800px;
  max-width: 100vw;
  color: #fff;

  .layer,
  .background {
    position: absolute;
    right: -200px;
    width: 100vw;
    height: 100%;
  }

  .layer {
    background-color: #000;
    opacity: 0.5;
    z-index: 0;
  }

  .background {
    background: url(${FujiMountain});
    background-repeat: no-repeat;
    background-position: center, center;
    background-size: cover, cover;
    z-index: -1;
  }

  .travel-trips-content {
    position: relative;
    z-index: 10;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      font-size: 36px;
      font-weight: 600;
      margin-bottom: 30px;
      text-transform: capitalize;
    }

    p {
      width: 700px;
      text-align: center;
      line-height: 35px;
      font-size: 12px;
      margin-bottom: 60px;
    }

    img {
      cursor: pointer;
    }

    h4 {
      font-size: 22px;
      font-weight: 500;
      margin-top: 10px;
    }
  }
`;
