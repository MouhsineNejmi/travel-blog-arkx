import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';

import Home from './pages/home/home.page';
import Post from './pages/post/Post.page';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page';

import { Container, GlobalStyles } from './helpers/global.styles';
import { darkTheme, lightTheme } from './helpers/theme';
import { useDarkMode } from './hooks/useDarkMode.hook';

const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Navbar theme={theme} themeToggler={themeToggler} />
      <Container>
        <GlobalStyles />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='/post' element={<Post />} />
            <Route path='/signin-signup' element={<SignInAndSignUp />} />
          </Route>
        </Routes>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
