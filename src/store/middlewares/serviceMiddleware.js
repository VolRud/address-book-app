import firebase from '../../config/firebase'

export default store => next => action => {

	const dbContacts = firebase.firestore().collection('contacts');
	const { type, payload, } = action;
	
	let docRef = '';
	if(payload && payload.hasOwnProperty('id')){
		docRef = dbContacts.doc(payload.id);
	}
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
		.catch(error => next({
				type: type+'_FAIL', 
				payload: error
			})
		);

	} else if(action.type==='CREATE_NEW_CONTACT'){
		dbContacts.add({
		name: payload.name,
		email: payload.email,
	})
	.then( docRef => next({
			type: type+'_SUCCESS', 
			payload: Object.assign({}, payload, {id: docRef.id })
		})
	)
	.catch( error => next({
			type: type+'_FAIL', 
			payload: error
		})
	);
	} else if(action.type==='DELETE_CONTACT'){
		docRef.delete().then(()=>next({
			type: type+'_SUCCESS',
			payload: payload.id
		})).catch(error=>next({
			type: type+'_FAIL',
			payload:error,
		}));
	} else if(action.type==='UPDATE_CONTACT'){
		const { name, email} = action.payload;
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




