import { string, func } from 'prop-types';
import { ToggleContainer } from './toggler.style';
import { FaSun } from 'react-icons/fa';
import { MdDarkMode } from 'react-icons/md';

const Toggler = ({ theme, themeToggler }) => {
  return (
    <ToggleContainer>
      <input type='checkbox' id='checkbox' />
      <label htmlFor='checkbox' onClick={themeToggler}>
        { theme === 'light'
          ? <FaSun color='#ffa902' size={20} /> 
          : <MdDarkMode color='#fff' size={20} /> }
      </label>
    </ToggleContainer>
  )
}

Toggler.propTypes = {
  theme: string.isRequired,
  themeToggler: func.isRequired
}

export default Toggler;