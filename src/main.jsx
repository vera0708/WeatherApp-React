import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'normalize.css';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import  store, { persistor } from './store/store.js';
import { Loading } from './components/Loading/Loading.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={<Loading/>} persistor={persistor}>
      <App />
    </PersistGate>    
  </Provider>,
)
