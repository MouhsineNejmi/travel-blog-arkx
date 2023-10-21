import { Link } from 'react-router-dom'
import { FooterContainer } from './footer.style'

const Footer = () => {
  return (
    <FooterContainer>
      <h3>Made with ❤ by Mouhsine Nejmi in <Link to='https://www.arkx.group/' target='blank'>Arkx Academy.</Link></h3>
    </FooterContainer>
  )
}

export default Footer