import {ADD_SERVING} from './actions'

export default function Add(state = [], action){
  switch (action.type) {
    case ADD_SERVING:
      return [
        ...state,
        {
          text: action.text
        }
      ]
    default:
      return state
  }
}
