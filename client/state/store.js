import {createStore} from 'redux'
import Add from './reducer'
import thunk from 'redux-thunk'
import {applyMiddleware} from 'redux'
const store = createStore(Add, applyMiddleware(thunk))
export default store
// import {addServing} from './actions'
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
