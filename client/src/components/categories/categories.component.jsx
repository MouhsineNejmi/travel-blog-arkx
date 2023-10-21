import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import categories from './categories.data';
import Category from '../category/category.component';
import { CategoriesContainer } from './categories.style';
import { Title } from '../../helpers/global.styles';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Categories = () => {
  return (
    <CategoriesContainer>
      <Title>Choose A Category</Title>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={6}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
      >
        {categories.map(({ id, link, name, img }) => (
          <SwiperSlide key={id}>
            <Category link={link} name={name} img={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CategoriesContainer>
  )
}

export default Categories