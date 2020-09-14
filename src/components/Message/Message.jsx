import React from 'react';
import Chat from './Dialogies/Chat';
import Input from './Input';
import classes from './Message.module.css';
import Text from './Text';
import { BrowserRouter, Route } from "react-router-dom";


const Message = (props) => {

    let chatsOver = props.chI.chats
        .map((chat) => { return (<Chat name={chat.name} id={chat.id} />) }
        )

    let messagesOver = props.meI.messages
        .map((mess) => {
            return (<Text massage={mess.name} />
            )
        })

    return (
        <div className={classes.grid}>
            <div className={classes.dialogies}>
                {chatsOver}
            </div>
            <div>
                <div className={classes.texty}>
                    {messagesOver}
                </div>
                <Input />
            </div>
        </div>
    )
}

export default Message;