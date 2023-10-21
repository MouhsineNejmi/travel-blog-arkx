import { string, object } from 'prop-types';
import { Button } from './custom-button.style';

const CustomButton = ({ children, ...props }) => {
  return (
    <Button className='custom-button' {...props}>
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  children: string,
  props: object,
};

export default CustomButton;
