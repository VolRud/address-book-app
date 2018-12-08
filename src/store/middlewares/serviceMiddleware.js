import firebase from '../../config/firebase'

export default store => next => action => {

	const dbContacts = firebase.firestore().collection('contacts');
	const { type, payload, } = action;
	if(type === 'GET_CONTACTS'){
 
		
		dbContacts.get()
		.then(snapshot => {
			let array = [];
			
			snapshot.forEach((doc) => {
				array.push(Object.assign({id:doc.id}, doc.data()));
			});

			return next({
				type: type+'_SUCCESS', 
				payload: array
			})
		

		})
		.catch(error => next(
			{
				type: type+'_FAIL', 
				payload: error
			}
			)
		);

	} else if(action.type==='CREATE_NEW_CONTACT'){
		
		dbContacts.add({
		name: payload.name,
		email: payload.email,
	
	})
	.then(function(docRef) {

		return next({
			type: type+'_SUCCESS', 
			payload: Object.assign({}, payload, {id: docRef.id })
		})
	})
	.catch(function(error) {
		return next({
			type: type+'_FAIL', 
			payload: error
		})
	});
	} else if(action.type==='DELETE_CONTACT'){
		
		var docRef = dbContacts.doc(action.payload);
		docRef.delete().then(()=>{		console.log('docRef', docRef); return next({
			type: type+'_SUCCESS',
			payload
		})}).catch(error=>next({
			type: type+'_FAIL',
			payload:error,
		}));
	} else if(action.type==='UPDATE_CONTACT'){
		const { name, id, email} = action.payload;
		var docRef = dbContacts.doc(id);
		docRef.update({name,email})
		.then(()=>next({
			type: type + '_SUCCESS',
			payload
		})).catch(()=>next({
			type: type+'_FAIL',
			payload
		}));


	}else{
		next(action)
	}






}








 

//   
// }




// // // var docRef = db.collection('contacts').doc('K2XVxgJjvKUBJqiOeIyb');
// // // docRef.delete();


// // console.log('______________________---');
// // console.log(firebase);
// // console.log('db', db);
// // // console.log('docRef', docRef);

// // console.log('______________________---');













// 	// const { requestPath, requestMethod, type, requestData, ...rest } = action
// 	// if(!requestPath) return next(action)

// 	// const SERVER_URL = 'http://localhost:3001/'
// 	// next({
// 	// 	...rest, type: type + REQUEST 
// 	// })
	
//  	// if(requestMethod==='GET'){
// 	//     axios.get(`${SERVER_URL}${requestPath}`)
// 	//     .then(res => { 
// 	//       const data = res.data;
// 	//       return next({
// 	//       	...rest, 
// 	//       	type: type + SUCCESS, 
// 	//       	payload: data
// 	//       })
// 	//     }).catch(function (error) {  
// 	//     	const errorMessage = error.response.data;
// 	//     	return next({
// 	//     		...rest, 
// 	//     		type: type + FAILURE, 
// 	//     		payload:errorMessage
// 	//     }) 
// 	//   	}); 
//  	// }
//  	// else if(requestMethod==='DELETE'){
// 	//     axios.delete(`${SERVER_URL}${requestPath}`)
// 	//     .then(res => {
// 	//       return next({
// 	//       	...rest, 
// 	//       	type: type + SUCCESS, 
// 	//       	payload: requestPath
// 	//       })
// 	//     }).catch(function (error) {  
// 	//     	const errorMessage = error.response.data;
// 	//     	return next({
// 	//     		...rest, 
// 	//     		type: type + FAILURE, 
// 	//     		payload:errorMessage
// 	//     }) 
// 	//   	}); 
//  	// }
//  	// else if(requestMethod==='POST'){ 
// 	//     axios.post(`${SERVER_URL}${requestPath}`, requestData )
// 	//     .then(res => { 
// 	//       const data = res.data; 
// 	//       return next({
// 	//       	...rest, 
// 	//       	type: type + SUCCESS, 
// 	//       	payload: Object.assign( {}, data, requestData )
// 	//       })
// 	//     }).catch(function (error) {  
// 	//     	const errorMessage = error.response.data;
// 	//     	return next({
// 	//     		...rest, 
// 	//     		type: type + FAILURE, 
// 	//     		payload:errorMessage
// 	//     }) 
// 	//   	}); 
//  	// }
//  	// else if(requestMethod==='PUT'){ 
// 	//     axios.put(`${SERVER_URL}${requestPath}`, requestData )
// 	//     .then(res => { 
// 	//       const data = res.data; 
// 	//       return next({
// 	//       	...rest, 
// 	//       	type: type + SUCCESS, 
// 	//       	payload: Object.assign( {}, data, requestData )
// 	//       })
// 	//     }).catch(function (error) {  
// 	//     	const errorMessage = error.response.data;
// 	//     	return next({
// 	//     		...rest, 
// 	//     		type: type + FAILURE, 
// 	//     		payload:errorMessage
// 	//     }) 
// 	//   	}); 
//  	// }
//  	// else{
//  		// next(action)
//  	// }
// // }