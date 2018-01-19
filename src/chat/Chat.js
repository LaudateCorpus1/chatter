import React from 'react';
import { MessagesList } from './MessagesList/MessageList.container';
import { NewMessage } from './NewMessage/NewMessage.connect';
import { Sidebar } from './Sidebar/Sidebar.container';

export const ChatComponent = () => {
    return (
        <div id="container">
            <Sidebar/>
            <section id="main">
                <MessagesList/>
                <NewMessage/>
            </section>
        </div>
    )
};
