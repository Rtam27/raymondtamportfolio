import axios from 'axios'
import history from '../history'


const SEND_CONTACT = "SEND_CONTACT"

export const sendContactThunk = (info) => {
    return async (dispatch) => {
      try {
        console.log('this is working???',info) 
        const response = await axios.post(`/api/contact`,info);
      } catch (error) {
        console.log('e',error);
      }
    };
  };

  const initialState = {
    messages: [],
    // userStatus: ''
  };

  export default function contactReducer(state = initialState, action) {
    switch (action.type) {
   
      default:
        return state;
    }
  }