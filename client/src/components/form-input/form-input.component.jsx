import { string, func, object } from 'prop-types';
import { FormInputGroup } from './form-input.style';

const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <FormInputGroup>
      <input className='form-input' onChange={handleChange} {...props} />
      {label ? <label className='form-input-label'>{label}</label> : null}
    </FormInputGroup>
  );
};

FormInput.propTypes = {
  handleChange: func,
  label: string,
  props: object,
};

export default FormInput;
