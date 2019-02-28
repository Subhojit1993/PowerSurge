import getData from '../JSON/getData.jsx';

export default (state = {}, action) => {
 	switch (action.type) {
  	case 'SIMPLE_ACTION':
   	return {
		  result: getData
	  }
	default:
		return state
	}
}