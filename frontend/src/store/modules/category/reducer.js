export default function category(state = 'OrdinaryDrink', action) {
  
  switch(action.type) {
    case 'SELECT_CATEGORY':
      return action.category;

    default:
      return state;
  }
}