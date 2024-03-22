import './App.css';

import { BaseModalBackground, ModalProvider } from 'styled-react-modal';
import { Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import { Content } from './layouts/content';
import { Footer } from './layouts/footer';
import { Header } from './layouts/header';
import { Home } from './pages/home';
import { routePaths } from './constants/paths';
import { useThemeChooser } from './contexts/theme-chooser';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Helvetica, Roboto, Arial, sans-serif;
    transition: all 0.50s linear;
  }
  `;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FadingBackground: any = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;

function App() {
  const { themeConfig } = useThemeChooser();
  return (
    <ThemeProvider theme={themeConfig}>
      <ModalProvider backgroundComponent={FadingBackground}>
        <GlobalStyles />
        <Header />
        <Content>
          <Routes>
            <Route path={routePaths.Home} element={<Home />} />
          </Routes>
        </Content>
        <Footer />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
