import { connect } from 'react-redux';
import MessagesListComponent from './MessageList.component';

export const MessagesList = connect(state => ({
    messages: state.messages
}), {})(MessagesListComponent);