var actions = require('./actions')
// import {ADD_SERVING} from './actions'
import update from 'react-addons-update'
let initialState = {data: ['']}
export default function Add(state, action){
  state = state || initialState
  // console.log(action)
  if (action.type === actions.ADD_SERVING) {
    // console.log('action:', actions)
    var newState = update(state, {
		 	data : {$push : [action.text]}
		});
			return newState;
	}
  if (action.type === actions.SAVE_DATA_SUCCESS) {
    console.log('saveDataSuccess from reducer:', action)
    var newState = update(state, {
		 	data : {$push : [action.text]}
		});
			return newState;
  }
  if(action.type === actions.FETCH_DATA_SUCCESS) {
		// console.log('from reducer', action.data);
			return {
				data: action.data
			};
		}
		if(action.type === actions.FETCH_DATA_ERROR) {
			return {
				error : action.error
			};
		}


      return state

}
