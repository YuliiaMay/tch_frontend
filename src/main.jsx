import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import { light } from './styles';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <ThemeProvider theme={light}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
);