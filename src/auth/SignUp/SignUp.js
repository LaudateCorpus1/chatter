import React from 'react';
import PropTypes from 'prop-types';

const SignUpComponent = (props) => {
    let email, password;

    return (
        <section>
            <input
                type="text"
                ref={(node) => email = node}
            />
            <input
                type="text"
                ref={(node) => password = node}
            />
            <button type="button" onClick={() => {
                props.signUp(email.value, password.value);
            }}>Регистрация</button>
        </section>
    );
};

SignUpComponent.propTypes = {
    signUp: PropTypes.func.isRequired
};

export default SignUpComponent;