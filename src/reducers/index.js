import { combineReducers } from 'redux';
import { listProductReducer } from './listProductReducer';
import listCartReducer from './listCartReducer';

export default combineReducers({
  listProduct: listProductReducer,
  listCart: listCartReducer,
});
