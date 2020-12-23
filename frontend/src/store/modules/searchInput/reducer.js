export default function searchInput(state = [], action) {
  switch(action.type) {
    case 'SEARCH_INPUT':
      return action.searchValue;

    default:
      return state;
  }
}