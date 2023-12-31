import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
// import { createPromise } from 'redux-promise-middleware'
import logger from 'redux-logger'
import { thunk } from 'redux-thunk'
// import reduxPromise from 'redux-promise';
import App from './components/App.jsx'
import './index.css'
import reducers from './reducers'

//const middleware = applyMiddleware(reduxPromiseMiddleware, reduxThunk, logger);
const middleware = [
  thunk,
  logger
]

const store = createStore(reducers, {}, applyMiddleware(...middleware));

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    </React.StrictMode>,
)


// console.log(import.meta.env.VITE_APP_STRIPE_KEY)
// console.log(import.meta.env.NODE_ENV)
// console.log(import.meta.env.DEV)