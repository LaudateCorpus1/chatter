export const SIGN_UP_REQUEST = '[Sign up] Request';
export const SIGN_UP_FAILURE = '[Sign up] Failure';
export const SIGN_UP_SUCCESS = '[Sign up] Success';

export const SIGN_IN_REQUEST = '[Sign in] Request';
export const SIGN_IN_FAILURE = '[Sign in] Failure';
export const SIGN_IN_SUCCESS = '[Sign in] Success';


export const signUpRequest = (email, password) => ({
    type: SIGN_UP_REQUEST,
    email,
    password
});

export const signUpFailure = () => ({ type: SIGN_UP_FAILURE });

export const signUpSuccess = () => ({
    type: SIGN_UP_SUCCESS
});


export const signINRequest = (email, password) => ({
    type: SIGN_IN_REQUEST,
    email,
    password
});

export const signINFailure = () => ({ type: SIGN_IN_FAILURE });

export const signINSuccess = () => ({
    type: SIGN_IN_SUCCESS
});