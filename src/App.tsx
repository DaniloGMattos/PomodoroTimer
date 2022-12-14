import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CyclesContextProvider } from './context/CyclesContext';
import { Router } from './routes/Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
