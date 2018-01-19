import { connect } from 'react-redux'
import NewMessageComponent from './NewMessage.component';
import { addMessage } from '../state/actions';

const mapDispatchToProps = dispatch => ({
    dispatch: (message, author) => {
        dispatch(addMessage(message, author))
    }
});

export const NewMessage = connect(() => ({}), mapDispatchToProps)(NewMessageComponent);