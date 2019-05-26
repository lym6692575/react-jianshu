import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store/index'
import Header from './common/header/index';
import { GlobalStyle } from './style';
import { GlobalStyleIcon } from './statics/iconfont/iconfont'
import Home from './pages/home'
import Detail from './pages/detail'

class App extends Component {
  render() {
    return (
        <Provider store={store}> 
          <GlobalStyle />
          <GlobalStyleIcon />
          <Header />
          <BrowserRouter>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
