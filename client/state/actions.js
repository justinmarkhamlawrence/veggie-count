require('isomorphic-fetch')
export const ADD_SERVING = 'ADD_SERVING'
export const ADD_SERVING_SUCCESS = 'ADD_SERVING_SUCCESS'
export const ADD_SERVING_ERROR = 'ADD_SERVING_ERROR'
export const SAVE_DATA_SUCCESS = 'SAVE_DATA_SUCCESS';
export const SAVE_DATA_ERROR = 'SAVE_DATA_ERROR';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

export function fetchData(){
	return function(dispatch){
	//match it to the server.js
	var url = 'http://localhost:8000/user/veggie';
	//this fetch is available thanks to Thunk middleware which will be handled by the reducers once
	//the action is dispatch to the reducer and then in the store
	return fetch(url).then(function(response) {
           if (response.status < 200 || response.status >= 300) {
               var error = new Error(response.statusText);
               error.response = response;
               throw error;
           }
           return response.json();
       })

       .then(function(data) {
          // console.log("fetchDATA resolved promise in Actions: ", data);
           return dispatch(
           	//this will pass the entire object comming from the backend
           	//better to leave it like this and point to the speficic data in reducers
               fetchDataSuccess(data)
           );
       })
       .catch(function(error) {
           return dispatch(
               fetchDataError(error)
           );
       });
   }
};




export function addServing(text) {
  return function(dispatch) {
    var url = 'http://localhost:8000/user/veggie'
    return fetch(url, {
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({name: text})
    }).then(function(response) {
      if (response.status < 200 || response.staus >= 300) {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }
      return response.json()
    })
    .then(function(data) {
     console.log("POST DATA: ", data);
     return dispatch(

      saveDataSuccess()
      );
   })
    .catch(function(error) {
      return dispatch(
        saveDataError(error)
        );
    });
    console.log('text from actions:', text)
    return {type: ADD_SERVING, text: text}

  };


}

export function fetchDataSuccess(data){
	return {
		type: FETCH_DATA_SUCCESS,
		data: data
	};
};

export function fetchDataError(error){
  return {
    type: FETCH_DATA_ERROR,
    error: error
  };
};

export function saveDataSuccess(item) {
  console.log('saveDataSuccess:',item)
  return {
    type: SAVE_DATA_SUCCESS,
    item: item
  };
};

export function saveDataError(error) {
  return {
    type: SAVE_DATA_ERROR,
    error: error
  };
};
// exports.SAVE_DATA_SUCCESS = SAVE_DATA_SUCCESS;
// exports.saveDataSuccess = saveDataSuccess;
// exports.SAVE_DATA_ERROR = SAVE_DATA_ERROR;
// exports.saveDataError = saveDataError;
// exports.saveListItem = saveListItem;
