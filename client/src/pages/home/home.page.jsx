import {
  HomeContainer,
  HeroSection,
  HeroLayer,
  HeroContent,
  ExploreContainer,
  ExploreButtonContainer,
  ExploreButton,
  LatestBlogContainer,
  PostsCards,
  PopularPosts,
  ExploreCardsWrapper,
  TravelTripsContainer,
} from './home.style';
import { Title } from '../../helpers/global.styles';

import Categories from '../../components/categories/categories.component';
import ExploreCard from '../../components/explore-card/explore-card.component';
import PostCard from '../../components/post-card/post-card.component';
import PopularPost from '../../components/popular-post/popular-post.component';

import WomenTravelerImg from '../../assets/women_traveler_hero.jpeg';
import FujiMountain from '../../assets/fuji_mountain.jpeg';
import VideoPlayerIcon from '../../assets/icons/video_player.svg';

import { explorePosts, latestPosts } from '../../data/posts.data';

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <img src={WomenTravelerImg} alt='Women Traveler Hero' />
        <HeroLayer />
        <HeroContent>
          <h1>Where will you go next?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed et
            donec purus viverra. Sit justo velit, eu sed sollicitudin tempus,
            risus. Sed sit elit mauris adipiscing. Lobortis pellentesque nulla
            accumsan id urna, ullamcorper gravida varius. Massa mauris, cursus
            orci magna non enim fames et sed.
          </p>
          <h3>Let&apos;s Go...</h3>
        </HeroContent>
      </HeroSection>

      <Categories />

      <ExploreContainer>
        <Title>Featured Explore</Title>

        <ExploreCardsWrapper>
          {explorePosts.map((post) => (
            <ExploreCard key={post.id} post={post} />
          ))}
        </ExploreCardsWrapper>

        <ExploreButtonContainer>
          <ExploreButton to='/'>See more</ExploreButton>
        </ExploreButtonContainer>
      </ExploreContainer>

      <LatestBlogContainer>
        <Title>My Latest Blog</Title>

        <div className='all-posts'>
          <PostsCards>
            {latestPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </PostsCards>

          <PopularPosts>
            <Title className='popular-title'>Popular Posts</Title>
            {latestPosts.map((post) => (
              <PopularPost key={post.id} post={post} />
            ))}
          </PopularPosts>
        </div>

        <ExploreButtonContainer>
          <ExploreButton>All posts</ExploreButton>
        </ExploreButtonContainer>
      </LatestBlogContainer>

      <TravelTripsContainer>
        <div className='layer'></div>
        <img className='background' src={FujiMountain} />
        <div className='travel-trips-content'>
          <h3>Trips for your first solo traveling</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed et
            donec purus viverra. Sit justo velit, eu sed sollicitudin tempus,
            risus. Sed sit elit mauris adipiscing. Lobortis pellentesque nulla
            accumsan id urna, ullamcorper gravida varius.
          </p>
          <img src={VideoPlayerIcon} alt='Video player' />
          <h4>Watch Video</h4>
        </div>
      </TravelTripsContainer>
    </HomeContainer>
  );
};

export default Home;
