import { userConstants } from '../_constants';

const initialState = {}
export function cardReducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.GETCARDS_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETCARDS_SUCCESS:
      return {
        cards: action.payload
      };
    case userConstants.GETCARDS_FAILURE:
      return { 
        error: action.payload
      };
    case userConstants.CARDS_REQUEST:
      return {
        loading: true
      };
    case userConstants.CARDS_SUCCESS:
        console.log('action.payload', action.payload)
      return {
        added: action.payload
      };
    case userConstants.CARDS_FAILURE:
      return { 
        error: action.payload
      };

    default:
      return state
  }
}