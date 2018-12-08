import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers'; 
import serviceMiddleware from './middlewares/serviceMiddleware'
 
const enhancer = applyMiddleware(serviceMiddleware)
const store = createStore(reducer, {}, enhancer);

export default store;