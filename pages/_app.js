import '@/styles/globals.scss'
import '@/styles/linkscss.scss'
import React from "react"
import { wrapper } from "../redux/store/store"
import makeStore from '../redux/store/store'
import { Provider } from 'react-redux'

import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";

import rootReducers from "../redux/reducers/rootreducer";




export default function App({ Component, pageProps}){
  // const makeStore = createStore(rootReducers);
  return (
    <Provider store={makeStore}>
      <Component {...pageProps} />
    </Provider>

  )
}