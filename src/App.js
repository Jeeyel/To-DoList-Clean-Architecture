import React from 'react';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import HomePage from './app/pages/HomePage';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
