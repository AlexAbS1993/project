import React from 'react';
import Chat from './Dialogies/Chat';
import Input from './Input';
import classes from './Message.module.css';
import Text from './Text';


const Message = (props) => {

    let chatsOver = props.chats
        .map((chat) => { return (<Chat name={chat.name} id={chat.id} />) }
        )

    let messagesOver = props.messages
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
                <Input disSendMessage={props.disSendMessage} disMessageTypeTemp={props.disMessageTypeTemp} tempMess={props.dialogiesPages.tempMess} />
            </div>
        </div>
    )
}

export default Message;