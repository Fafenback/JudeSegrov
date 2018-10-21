import { FETCH_RECIPES } from '../actions';


export default (state=[], action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return action.payload.data;
    default:
      return state;
  }
}