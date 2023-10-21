import { object } from 'prop-types';
import {
  CategoryLink,
  ExploreCardLinks,
  ProfileLink,
} from '../explore-card/explore-card.style';
import { PostCardInfo } from '../post-card/post-card.style';
import { PopularPostWrapper } from './popular-post.style';

const PopularPost = ({ post }) => {
  const { img, title, category, author, date, commentsCount } = post;

  return (
    <PopularPostWrapper>
      <div className='bg-grey'>
        <img src={img} alt={title} />
      </div>

      <PostCardInfo className='popular-post-info'>
        <h3>{title}</h3>

        <ExploreCardLinks className='card-links'>
          <CategoryLink to={category.link}>{category.name}</CategoryLink>
          <span> By </span>
          <ProfileLink>{author}</ProfileLink>
        </ExploreCardLinks>

        <div className='post-info'>
          <p className='post-date'>{date}</p>
          <div className='separator'></div>
          <p className='comments-count'>{commentsCount}</p>
        </div>
      </PostCardInfo>
    </PopularPostWrapper>
  );
};

PopularPost.propTypes = {
  post: object.isRequired,
};

export default PopularPost;
