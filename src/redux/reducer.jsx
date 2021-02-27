import {
  ADD_ITEM,
  DELETE_ITEM,
} from './actions';

const INITIAL_STATE = {
  wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        wishList: state.wishList.concat([action.payload]),
      };
    case DELETE_ITEM:                                         //the payload is the index of the item to remove
      let ret = [...state.wishList]
      ret.splice(action.payload,1)
      return {
        //wishList: state.wishList.filter((e) => {return e !== action.payload}),
        wishList: ret,
      };
    default:
      return {
        wishList: [],
      };
  }
};

export default reducer;