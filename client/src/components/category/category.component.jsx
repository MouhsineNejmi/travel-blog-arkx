import { string } from 'prop-types';
import { CategoryContainer, Layer } from './category.style';

const Category = ({ link, name, img }) => {
  return (
    <CategoryContainer $img={img} to={link}>
      <Layer className='layer' />
      <h3>{name}</h3>
    </CategoryContainer>
  )
}

Category.propTypes = {
  link: string.isRequired,
  name: string.isRequired,
  img: string.isRequired 
}

export default Category;