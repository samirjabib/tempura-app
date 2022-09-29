import { createAction } from '../../utils/reducer/reducer.utils'
import { USER_ACTION_TYPES } from './user.types'

export const setCurrentUser = ( user ) => 
    createAction(USER_ACTION_TYPES.SET_CURRET_USER, user);


export const checkUserSession = () => 
    createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const signInStart = ( email, password, name )  => {
    createAction(USER_ACTION_TYPES.SIGN_IN_START, {
        email,
        password,
        name
    })
}

export const signInSuccess = ( { user, addionalsDetails } );
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, { user , addionalsDetails})

export const signInFailed =  ( error ) => 
    createAction( USER_ACTION_TYPES.SIGN_IN_FAILED, error);


