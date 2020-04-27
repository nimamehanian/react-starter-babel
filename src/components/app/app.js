import { hot } from 'react-hot-loader/root';
import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from 'styles/global';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
// import AuthForm from 'components/authForm/authForm';
import { $white, $olive } from 'styles/colors';

const Header = styled.div`
  color: ${$white};
  background: ${$olive};
  height: 60px;
  font-size: 20px;
  font-family: 'Tiempos Med';
  line-height: 3;
  padding: 0px 0px 0px 8px;
`;

function App() {
  const theme = createMuiTheme({
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
    },
  });

  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header>Yolo — Here is your app. Let's get started!</Header>
        {/* <Switch> */}
        {/* <Route exact path="/" render={(props) => <AuthForm primaryColor={$olive} {...props} />} /> */}
        {/* <Route exact path="/pathB" component={ComponentB} /> */}
        {/* </Switch> */}
        {/* <Footer /> */}
      </ThemeProvider>
    </div>
  );
}

export default hot(App);
