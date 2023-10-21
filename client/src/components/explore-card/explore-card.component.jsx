import { object } from 'prop-types';
import {
  ExploreCardContainer,
  ExploreCardContent,
  ExploreCardLinks,
  CategoryLink,
  ProfileLink,
} from './explore-card.style';

const ExploreCard = ({ post }) => {
  const { img, title, description, category, author } = post;

  return (
    <>
      <ExploreCardContainer>
        <div className='bg-grey'>
          <img src={img} alt={title} />
        </div>
        <ExploreCardContent>
          <h3>{title}</h3>
          <p>{description}</p>
          <ExploreCardLinks>
            <CategoryLink to={category.link}>{category.name}</CategoryLink>
            <span> By </span>
            <ProfileLink>{author}</ProfileLink>
          </ExploreCardLinks>
        </ExploreCardContent>
      </ExploreCardContainer>
    </>
  );
};

ExploreCard.propTypes = {
  post: object.isRequired,
};

export default ExploreCard;
