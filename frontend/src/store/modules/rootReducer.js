import { combineReducers } from 'redux';

import drink from './drink/reducer';
import category from './category/reducer';
import searchInput from './searchInput/reducer';
import searchType from './searchType/reducer';

export default combineReducers({
  drink,
  category,
  searchInput,
  searchType
})