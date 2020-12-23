export default function drink(state = [], action) {
  switch(action.type) {
    case 'ADD_DRINK':
      return action.drink;

    default:
      return state;
  }
}