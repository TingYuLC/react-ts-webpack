import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import App from '@/App';
import rootStore from './store';
import '@/index.less';

const store = createStore(rootStore);

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app') as HTMLElement,
);
