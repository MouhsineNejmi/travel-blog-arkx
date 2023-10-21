import { object } from 'prop-types';
import { Link } from 'react-router-dom';
import {
  ExploreCardLinks,
  CategoryLink,
  ProfileLink,
} from '../explore-card/explore-card.style';
import { PostCardInfo, PostCardWrapper } from './post-card.style';

const PostCard = ({ post }) => {
  const { img, title, description, category, author, date, commentsCount } =
    post;

  return (
    <PostCardWrapper>
      <div className='bg-grey'>
        <img src={img} alt={title} />
      </div>

      <PostCardInfo>
        <h3>{title}</h3>

        <ExploreCardLinks className='card-links'>
          <CategoryLink to={category.link}>{category.name}</CategoryLink>
          <span> By </span>
          <ProfileLink>{author}</ProfileLink>
        </ExploreCardLinks>

        <div className='post-info'>
          <p className='post-date'>{date}</p>
          <div className='separator'></div>
          <p className='comments-count'>{`${commentsCount} comment`}</p>
        </div>

        <p className='post-para'>{description}</p>

        <Link className='read-more'>Read more...</Link>
      </PostCardInfo>
    </PostCardWrapper>
  );
};

PostCard.propTypes = {
  post: object.isRequired,
};

export default PostCard;
