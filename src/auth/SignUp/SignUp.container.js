import { connect } from 'react-redux'
import SignUpComponent from './SignUp';
import { signUpRequest } from '../../state/auth/auth.actions';

const mapDispatchToProps = {
    signUp: signUpRequest
};

export const SignUp = connect(() => ({}), mapDispatchToProps)(SignUpComponent);