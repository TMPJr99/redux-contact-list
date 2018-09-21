import axios from 'axios';

export const ADD_CONTACT = 'ADD_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const EDIT_CONTACT = "EDIT_CONTACT";

export const addContact = (newContact) => {
    return dispatch => {
      axios.post(`http://localhost:8082/api/users`, newContact)
        .then(response =>{ 
          return dispatch({
            type: ADD_CONTACT,
            payload: response.data
          })
        }
        )
    }
  }


  export const removeContact = (id) => {
    return dispatch => {
      axios.delete(`http://localhost:8082/api/users/${id}`)
        .then(() => dispatch({
          type: REMOVE_CONTACT,
          payload: id
        })
      )
    }
  }

export const fetchContacts = () => {
    return dispatch => {
        axios.get('http://localhost:8082/api/users')
            .then(response => {
                console.log('UJNYHBTGVRFCRGTHJU',response.data)
                return dispatch({
                    type: FETCH_CONTACTS,
                    payload: response.data,
                })
            } )
    }
}

export const editContact = (id) => {
    return {
        type: EDIT_CONTACT,
        payload: id
    }
}