import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './routes/Home';
import theme from './utils/theme/theme';
import Header from './routes/Header';
import { Wrapper } from './styled';
import routes from './routes';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Router>
          <Header />
          <Switch>
            {routes.map(({ to, Com }) => (
              <Route path={to}>
                <Com />
              </Route>
            ))}
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </Wrapper>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
