// var redux = require('redux');
// var createStore = redux.createStore;
// var applyMiddleware = redux.applyMiddleware;
// var thunk = require('redux-thunk').default;
// var Add = require('./reducer');
//
// var store = createStore(Add, applyMiddleware(thunk));
//
// module.exports = store;
import {createStore} from 'redux'
import Add from './reducer'
//import thunk from 'redux-thunk'
var thunk = require ('redux-thunk').default
import {applyMiddleware} from 'redux'
import Redux from 'redux'
const store = createStore(Add, applyMiddleware(thunk))
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
import {addServing} from './actions'
//
// console.log(store.getState())
//
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )
//
// store.dispatch(addServing('kale'))
// store.dispatch(addServing('collards'))
// store.dispatch(addServing('cucumber'))
//
// unsubscribe()
