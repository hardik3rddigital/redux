import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Reducer from './Reducer/index'
// export * as actionCreaters from './Action/Actionindex'


const store = createStore(Reducer,{},applyMiddleware(thunk))

export default store;