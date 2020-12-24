export default function drink(state = [], action) {
  switch (action.type) {
    case 'CHOSE_DRINK':
      return action.drink;

    default:
      return state;
  }
}