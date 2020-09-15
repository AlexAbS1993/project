import React from 'react';
import Chat from './Dialogies/Chat';
import Input from './Input';
import classes from './Message.module.css';
import Text from './Text';


const Message = (props) => {

    let chatsOver = props.chI.chats
        .map((chat) => { return (<Chat name={chat.name} id={chat.id} />) }
        )

    let messagesOver = props.chI.messages
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
                <Input dispatch={props.dispatch} tempMess={props.chI} />
            </div>
        </div>
    )
}

export default Message;