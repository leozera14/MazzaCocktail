export default function searchType(state = 'name', action) {
  switch(action.type) {
    case 'SEARCH_TYPE':
      return action.searchType;

    default:
      return state;
  }
}