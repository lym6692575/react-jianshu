import React, { Component } from 'react';
import { GlobalStyle } from './style';
import { GlobalStyleIcon } from './statics/iconfont/iconfont'
import store from './store/index'
import { Provider } from 'react-redux'
import Header from './common/header/index';

class App extends Component {
  render() {
    return (
        <Provider store={store}> 
          <GlobalStyle />
          <GlobalStyleIcon />
          <Header />
        </Provider>
    );
  }
}

export default App;
